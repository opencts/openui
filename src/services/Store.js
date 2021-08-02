import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { _SERVER_URL, _WS_SERVER_URL } from "../config/environment";
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
                const socketUrl = _WS_SERVER_URL + attr + '/post';
                const socket = new WebSocket(socketUrl);
                socket.onopen = () => {
                    console.log('Connexion to socket ' + socketUrl + ' established!');
                    socket.onmessage = event => {
                        let { posted, route } = JSON.parse(event.data).data;
                        delete posted.__v;
                        console.log(data, route, data[route])
                        if (route in data && data[route].findIndex(it => it.id === posted.id) === -1) {
                            data[route].push(posted);
                            console.log('Data changement', data[route]);
                            setData({ ...data, [route]: [...data[route]] });
                        }
                    }
                };
                s[attr] = socket;
            }
            setSockets(s);
            setSchema(schema);
        }
    }, [schemaLoadingState, schema, data]);

    const all = useCallback(async (route) => {
        if (route in data) {
            return data[route];
        }

        const values = (await http.get(_SERVER_URL + route)).map(it => {
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

    async function wsSave(route, data, _id) {
        sockets[route].send(JSON.stringify(data));
    }

    return <StoreContext.Provider value={{
        all,
        one,
        save,
        wsSave,
        getSchema: collection => savedSchema[collection]
    }}>
        {children}
    </StoreContext.Provider>

}