import React, { useState } from 'react'
import { _STORAGE_PREFIX } from '../../config/environment';

function useSessionStorage(key, value = null) {

    const [svalue, setSvalue] = useState(() => {
        if (!key) {
            console.error('Key is required');
            throw new Error('Key is required')
        } else {
            if (value) {
                sessionStorage.setItem(_STORAGE_PREFIX + key, JSON.stringify(value));
                return value;
            } else {
                return JSON.parse(sessionStorage.getItem(_STORAGE_PREFIX + key));
            }
        }
    });

    function putValue(value) {
        sessionStorage.setItem(_STORAGE_PREFIX + key, JSON.stringify(value));
        setSvalue(value);
    }

    function clear() {
        sessionStorage.removeItem(_STORAGE_PREFIX + key);
        setSvalue(null);
    }

    return {
        sessionValue: lvalue,
        putSessionValue: putValue,
        clearSession: clear
    };
}

export default useSessionStorage;
