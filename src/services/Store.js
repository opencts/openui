import { createContext, useContext, useState } from "react";
import { _SERVER_URL } from "../config/environment";

const StoreContext = createContext()
export const useStore = () => useContext(StoreContext)

export default function Store({ children }) {

    const [data, setData] = useState({});

    async function all(route) {
        if (route in data) {
            return data[route];
        }

        const values = await fetch(_SERVER_URL + route, {
            method: 'GET'
        }).then(r => r.json());
        setData({ ...data, [route]: values });
        return values;
    }

    async function one(route, _id) {
        if (route in data) {
            return data[route].find(item => item._id === _id);
        }
        const value = await fetch(_SERVER_URL + route + "/" + _id, {
            method: 'GET'
        }).then(res => res.json());
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

    return <StoreContext.Provider value={data}>
        {children}
    </StoreContext.Provider>

}