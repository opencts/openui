import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { _WS_SERVER_URL } from '../../config/environment';
import { _CLIENT_DB_ACTIONS } from '../reducers/clientdb.reducer';

const WSContext = createContext('');

export const useWebSocket = () => useContext(WSContext);

function WSProvider({ children }) {

    const [sockets, setSockets] = useState({});
    const [socketsCallbacks, setSocketsCallbacks] = useState({});
    const [emitter, setEmitter] = useState(-1);
    const [status, setStatus] = useState('off');

    const handleSocketsMessages = useCallback((sockets, socketsCallbacks) => {
        for (const key in sockets) {
            sockets[key].onmessage = msg => {
                const response = JSON.parse(msg.data);
                if (response.status !== 200) {
                    setStatus('failed');
                } else {
                    setStatus('success');
                    const result = response.data;
                    const ans = result.data;
                    const id = ans._id ? ans._id: ans.id;
                    delete ans._id;
                    ans.id = id;
                    if (key === result.route) {
                        for (const action in socketsCallbacks[key]) {
                            if (result.action === action) {
                                socketsCallbacks[key][action](ans);
                            }
                        }
                    }
                }
                setEmitter(1);
            };
        }
    }, [emitter]);

    useEffect(() => {
        handleSocketsMessages(sockets, socketsCallbacks);
    }, [sockets, socketsCallbacks, handleSocketsMessages]);

    function defineWS(key, url, options = {
        data: null,
        cb: {
            add: () => { },
            update: () => { },
            delete: () => { },
        }
    }) {
        const newWS = new WebSocket(url);
        newWS.onopen = () => {
            if (options.data) {
                newWS.send(JSON.stringify(options.data));
            }
        };
        setSockets(sockets => ({ ...sockets, [key]: newWS }));
        setSocketsCallbacks(socketsCallbacks => ({ ...socketsCallbacks, [key]: options.cb }))
    }

    function send(collection, value, type) {
        setStatus('pending');
        setEmitter(emitter => emitter + 1);
        if (collection in sockets) {
            if (sockets[collection].readyState !== WebSocket.OPEN) {
                const socket = new WebSocket(sockets[collection.url]);
                socket.onopen = () => {
                    socket.send(JSON.stringify({
                        value,
                        type
                    }));
                }
            } else {
                sockets[collection].send(JSON.stringify({
                    value,
                    type
                }));
            }
        } else {
            defineWS(collection, _WS_SERVER_URL + collection, { data: value });
        }
    }

    return (
        <WSContext.Provider value={{
            sockets,
            defineWS,
            send,
            status
        }}>
            {children}
        </WSContext.Provider>
    )
}

export default WSProvider
