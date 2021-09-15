import localforage from 'localforage';
import React, { useEffect, useState } from 'react'
import { _STORAGE_PREFIX } from '../../config/environment';

function usePersistance(key, value = null) {

    const [lvalue, setLvalue] = useState(null);
    useEffect(() => {
        const cb = async () => {
            if (!key) {
                throw new Error('Key is required');
            } else {
                if (value) {
                    setLvalue(await localforage.setItem(_STORAGE_PREFIX + key, value));
                } else {
                    setLvalue(await localforage.getItem(_STORAGE_PREFIX + key));
                }
            }
        };
        cb();
    }, [])

    async function putValue(value) {
        setLvalue(await localforage.setItem(_STORAGE_PREFIX + key, value));
    }

    async function clear() {
        await localforage.removeItem(_STORAGE_PREFIX + key);
        setLvalue(null);
    }

    return {
        value: lvalue,
        persistItem: putValue,
        clear
    };
}

export default usePersistance
