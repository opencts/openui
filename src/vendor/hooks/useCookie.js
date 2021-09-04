import React, { useState } from 'react'
import { _STORAGE_PREFIX } from '../../config/environment';

function useCookie(key, value = null) {
    const [cvalue, setValue] = useState(() => {
        if (!key) {
            console.error('Key is required');
            throw new Error('Key is required')
        } else {
            const cookieExists = getCookie(key);
            if (value) {
                if (cookieExists && cookieExists !== value) {
                    document.cookie =  _STORAGE_PREFIX + key + '=' + value;
                }
                return value;
            } else {
                return cookieExists;
            }
        }
    });

    function getCookie(key) {
        const cookies = document.cookie.split(';');
        let founded = false;
        let i = 0;
        for (const el in cookies) {
            if (el.indexOf(_STORAGE_PREFIX + key) !== -1) {
                founded = i;
            }
            i++;
        }
        return founded ? cookies[founded].trim().split('=')[1] : null;
    }

    function putValue(value) {
        document.cookie = _STORAGE_PREFIX + key + '=' + value;
        setValue(value);
    }

    function clear() {
        document.cookie = _STORAGE_PREFIX + key + '=' + ';expires=' + new Date().toUTCString();
        setValue(null);
    }

    return {
        cookieValue: cvalue,
        putCookieValue: putValue,
        clearCookie: clear
    };
}

export default useCookie
