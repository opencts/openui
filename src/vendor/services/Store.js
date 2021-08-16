import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { _SERVER_URL, _WS_SERVER_URL } from "../../config/environment";
import useSchema from "../hooks/useSchema";
import { http } from "./http.service";

const StoreContext = createContext()
export const useStore = () => useContext(StoreContext)

export default function Store({ children }) {

    const [data, setData] = useState({});
    const [schema, schemaLoadingState] = useSchema();
    const [savedSchema, setSchema] = useState({});
    const [sockets, setSockets] = useState({});

    // Connexion aux sockets serveurs
    useEffect(() => {
        if (!schemaLoadingState) {
            const s = {};
            for (const attr in schema) {
                const socketPostUrl = _WS_SERVER_URL + attr + '/post';
                const socketPutUrl = _WS_SERVER_URL + attr + '/put';
                const socketDeleteUrl = _WS_SERVER_URL + attr + '/delete';
                const postSocket = new WebSocket(socketPostUrl);
                const putSocket = new WebSocket(socketPutUrl);
                const deleteSocket = new WebSocket(socketDeleteUrl);
                postSocket.onopen = () => {
                    console.log('Connexion to socket ' + socketPostUrl + ' established!');
                    postSocket.onmessage = event => {
                        console.log(event);
                        let socketResponseData = JSON.parse(event.data).data;
                        if ('posted' in socketResponseData) {
                            const { posted, route } = socketResponseData;
                            delete posted.__v;
                            if (route in data && data[route].findIndex(it => it.id === posted.id) === -1) {
                                data[route].push(posted);
                                console.log('Added successfully', data[route]);
                                setData(data => ({ ...data, [route]: [...data[route]] }));
                            }
                        }
                    }
                };

                putSocket.onopen = () => {
                    console.log('Connexion to socket ' + socketPutUrl + ' established!');
                    putSocket.onmessage = event => {
                        console.log(event);
                        let socketResponseData = JSON.parse(event.data).data;
                        if ('updated' in socketResponseData) {
                            const { updated, route } = socketResponseData;
                            delete updated.__v;
                            if (route in data) {
                                const itemIndex = data[route].findIndex(it => it.id === updated.id);
                                if (itemIndex !== -1) {
                                    data[route].splice(itemIndex, 1, updated);
                                    console.log('Updated successfully', data[route]);
                                    setData(data => ({ ...data, [route]: [...data[route]] }));
                                }
                            }
                        }
                    }
                };

                deleteSocket.onopen = () => {
                    console.log('Connexion to socket ' + socketDeleteUrl + ' established!');
                    deleteSocket.onmessage = event => {
                        console.log(event);
                        let socketResponseData = JSON.parse(event.data).data;

                        if ('deletedId' in socketResponseData) {
                            const { deletedId, route } = socketResponseData;
                            const itemIndex = data[route].findIndex(it => it.id === deletedId);
                            if (route in data && itemIndex !== -1) {
                                data[route].splice(itemIndex, 1);
                                console.log('Updated successfully', data[route]);
                                setData({ ...data, [route]: [...data[route]] });
                            }
                        }
                    }
                };

                s[attr] = { postSocket, putSocket, deleteSocket };
            }
            setSockets(s);
            setSchema(schema);
        }
    }, [schemaLoadingState, schema, data]);

    const all = useCallback(async (route) => {
        if (route in data) {
            return data[route];
        }

        const getted = await http.get(_SERVER_URL + route);
        const values = getted.data.map(it => {
            const newItem = { ...it, id: it._id };
            delete newItem._id;
            delete newItem.__v;
            return newItem;
        });
        setData({
            ...data, [route]: values
        });
        return values;
    }, [data]);

    async function one(route, _id) {
        if (route in data) {
            return data[route].find(item => item._id === _id);
        }
        const value = await http.get(_SERVER_URL + route + "/" + _id);
        setData({ ...data, [route]: value });
        return value;
    }

    async function save(route, data, _id) {
        const reqMethod = !_id ? "POST" : "PUT";
        if (route in data) {
            const response = fetch(_SERVER_URL + '/' + (!_id ? '' : _id),
                {
                    method: reqMethod,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }

            );
            if (response.ok) {
                all(_SERVER_URL + '/' + _id);
            }
        }
    }

    function wsSave(route, data, id) {
        console.log(id);
        if (!id) {
            sockets[route].postSocket.send(JSON.stringify(data));
        } else {
            sockets[route].putSocket.send(JSON.stringify(data));
        }
    }

    function wsDelete(route, id) {
        sockets[route].deleteSocket.send(JSON.stringify({ id }));
    }

    return <StoreContext.Provider value={{
        all,
        one,
        save,
        wsSave,
        wsDelete,
        getSchema: collection => savedSchema[collection]
    }}>
        {children}
    </StoreContext.Provider>

}