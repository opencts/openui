import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { _SERVER_URL, _WS_SERVER_URL } from "../../config/environment";
import useSchema from "../hooks/useSchema";
import { http } from "./http.service";
import { deepCopie } from "./utils";

const StoreContext = createContext()
export const useStore = () => useContext(StoreContext)

export default function Store({ children }) {

    const [data, setData] = useState({});
    const [schema, schemaLoadingState] = useSchema();
    const [savedSchema, setSchema] = useState({});
    const [sockets, setSockets] = useState({});
    const [storeChanged, setCount] = useState(0);

    // Connexion aux sockets serveurs
    useEffect(() => {
        if (!schemaLoadingState) {
            console.log(schema)
            const s = {};
            for (const attr in schema) {
                const socketPostUrl = _WS_SERVER_URL + attr + '/post';
                const socketPutUrl = _WS_SERVER_URL + attr + '/put';
                const socketDeleteUrl = _WS_SERVER_URL + attr + '/delete';
                const postSocket = new WebSocket(socketPostUrl);
                const putSocket = new WebSocket(socketPutUrl);
                const deleteSocket = new WebSocket(socketDeleteUrl);

                s[attr] = {
                    postSocket: handleSocketPost(postSocket, socketPostUrl),
                    putSocket: handleSocketUpdate(putSocket, socketPutUrl),
                    deleteSocket: handleSocketDelete(deleteSocket, socketDeleteUrl)
                };
            };


            setSockets(s);
            setSchema(schema);
        }
    }, [schemaLoadingState, schema, data]);

    const handleSocketPost = (socket, url) => {
        const ev = event => {
            let socketResponseData = JSON.parse(event.data).data;
            if ('posted' in socketResponseData) {
                const { posted, route } = socketResponseData;
                delete posted.__v;
                if (route in data && data[route].findIndex(it => it.id === posted.id) === -1) {
                    data[route].push(posted);
                    console.log('Added successfully', data[route]);
                    setData(data => ({ ...data, [route]: [...data[route]] }));
                    setCount(storeChanged + 1);
                }
            }
        }
        socket.onmessage = ev;
        socket.onclose = () => {
            window.location.reload();
        }
        
        return socket;
    };

    const handleSocketUpdate = (socket, url) => {
        const ev = event => {
            let socketResponseData = JSON.parse(event.data).data;
            if ('updated' in socketResponseData) {
                const { updated, route } = socketResponseData;
                delete updated.__v;
                if (route in data) {
                    const itemIndex = data[route].findIndex(it => it.id === updated._id);
                    if (itemIndex !== -1) {
                        const newValue = { ...updated, id: updated._id };
                        delete newValue._id;
                        delete newValue.__v;
                        const newData = deepCopie(data[route]);
                        newData[itemIndex] = newValue;
                        setData(data => ({ ...data, [route]: [...newData] }));
                        setCount(storeChanged + 1);
                    }
                }
            }
        };

        socket.onmessage = ev;
        socket.onclose = () => {
            window.location.reload();
        }

        return socket;
    }

    const handleSocketDelete = (socket, url) => {
        const ev = event => {
            let socketResponseData = JSON.parse(event.data).data;
            if ('deletedId' in socketResponseData) {
                const { deletedId, route } = socketResponseData;
                const itemIndex = data[route].findIndex(it => it.id === deletedId);
                if (route in data && itemIndex !== -1) {
                    data[route].splice(itemIndex, 1);
                    console.log('Deleted successfully', data[route]);
                    setData({ ...data, [route]: [...data[route]] });
                    setCount(storeChanged + 1);
                }
            }
        }

        socket.onmessage = ev;
        socket.onclose = () => {
            window.location.reload();
        }

        return socket;
    };

    const all = async (route) => {
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
    };

    const one = async (route, _id) => {
        if (route in data) {
            return data[route].find(item => item._id === _id);
        }
        const value = await http.get(_SERVER_URL + route + "/" + _id);
        setData({ ...data, [route]: value });
        return value;
    }

    const save = async (route, data, _id) => {
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
        getSchema: collection => savedSchema[collection],
        storeChanged
    }}>
        {children}
    </StoreContext.Provider>

}