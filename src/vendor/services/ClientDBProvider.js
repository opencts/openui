import React, { createContext, useCallback, useContext, useEffect, useReducer, useState } from 'react'
import { _SERVER_URL, _STORAGE_PREFIX, _WS_SERVER_URL } from '../config/environment';
import DotsLoader from '../components/Progress/DotsLoader';
import useFetch from '../hooks/useFetch';
import { clientDBReducer, _CLIENT_DB_ACTIONS } from '../reducers/clientdb.reducer';
import { http } from './http.service';
import WSProvider, { useWebSocket } from './WSProvider';

const ClientDBContext = createContext();
let clientDBInitValue = {};

export const useClientDB = _ => useContext(ClientDBContext);

function ClientDBProviderWS({ children }) {

    const [db, dispatch] = useReducer(clientDBReducer, clientDBInitValue);
    const [loadingSchema, schema] = useFetch('get', _SERVER_URL + 'schema');
    const [dataIsLoading, triggerDataLoading] = useState(false);
    const [collectionLoadingInfo, setCollectionInLoading] = useState(null);
    const { send, defineWS, status } = useWebSocket();

    useEffect(() => {
        if (!loadingSchema) {
            if (!('schema' in db)) {
                dispatch({ type: _CLIENT_DB_ACTIONS._SET_SCHEMA, payload: schema });
                for (const route in schema) {
                    defineWS(route, _WS_SERVER_URL + route + '/ws', {
                        cb: {
                            [_CLIENT_DB_ACTIONS._ADD_ITEM]: (data) => {
                                dispatch({ type: _CLIENT_DB_ACTIONS._ADD_ITEM, collection: route, payload: data });
                            },
                            [_CLIENT_DB_ACTIONS._UPDATE_ITEM]: (data) => {
                                dispatch({ type: _CLIENT_DB_ACTIONS._UPDATE_ITEM, collection: route, payload: data });
                            },
                            [_CLIENT_DB_ACTIONS._DELETE_ITEM]: (data) => {
                                dispatch({ type: _CLIENT_DB_ACTIONS._DELETE_ITEM, collection: route, payload: data });
                            }
                        }
                    });
                }
            }
        }
    }, [loadingSchema, schema]);

    useEffect(() => {
        const cb = async () => {
            if (dataIsLoading) {
                const d = await http.get(_SERVER_URL + collectionLoadingInfo);
                let data = 'data' in d ? d.data : d;
                data = data.map(it => {
                    const id = '_id' in it ? it._id : it.id;
                    delete it._id;
                    it.id = id;
                    return it;
                });
                dispatch({
                    type: _CLIENT_DB_ACTIONS._SET_COLLECTION_DATA,
                    collection: collectionLoadingInfo,
                    payload: data
                });
                triggerDataLoading(false);
            }
        };
        cb();
    }, [dataIsLoading, collectionLoadingInfo]);

    const save = (collection, value) => {
        return send(collection, value, 'id' in value ? 'put' : 'post');
    }

    const remove = (collection, id) => {
        return send(collection, { id }, 'delete');
    };

    const load = useCallback((collection) => {
        if (!dataIsLoading) {
            if (!(collection in db)) {
                triggerDataLoading(true);
                setCollectionInLoading(collection);
            }
        }
    }, [dataIsLoading]);

    const getValue = (collection, id) => {
        return db[collection].find(it => it.id === id);
    };

    if (loadingSchema) return <DotsLoader />

    return (
        <ClientDBContext.Provider value={{
            db,
            save,
            load,
            remove,
            dataIsLoading,
            wsActionStatus: status,
            isLoadingSchema: loadingSchema,
            getValue
        }}>
            {children}
        </ClientDBContext.Provider>
    )
}

const ClientDBProvider = ({ children }) => {
    return <WSProvider>
        <ClientDBProviderWS>
            {children}
        </ClientDBProviderWS>
    </WSProvider>
}

export default ClientDBProvider
