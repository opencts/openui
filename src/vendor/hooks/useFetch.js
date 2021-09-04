import React, { useEffect, useState } from 'react'
import { http } from '../services/http.service';

function useFetch(method, url, data, id) {

    const [value, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            let d;
            switch (method.toLowerCase()) {
                case 'get':
                    d = await http.get(url);
                    break;
                case 'post':
                    d = await http.post(url, data);
                    break;
                case 'put':
                    d = await http.put(url, id, data);
                    break;
                case 'delete':
                    d = await http.delete(url, id);
                    break;
                default:
                    console.error('Invalid http method ' + method);
            }
            setData('data' in d ? d.data : d);
            setLoading(false);
        };
        load();
    }, []);

    return [loading, value];
}

export default useFetch;
