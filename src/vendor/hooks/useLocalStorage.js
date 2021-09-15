import React, { useState } from 'react'
import { _STORAGE_PREFIX } from '../../config/environment';

function useLocalStorage(key, value = null) {

    const [lvalue, setLvalue] = useState(() => {
        if (!key) {
            console.error('Key is required');
            throw new Error('Key is required');
        } else {
            if (value) {
                localStorage.setItem(_STORAGE_PREFIX + key, JSON.stringify(value));
                return value;
            } else {
                return JSON.parse(localStorage.getItem(_STORAGE_PREFIX + key));
            }
        }
    });

    function putValue(value) {
        localStorage.setItem(_STORAGE_PREFIX + key, JSON.stringify(value));
        setLvalue(value);
    }

    function clear() {
        localStorage.removeItem(_STORAGE_PREFIX + key);
        setLvalue(null);
    }

    return {
        localValue: lvalue,
        putLocalValue: putValue,
        clearLocal: clear
    };
}

export default useLocalStorage;
