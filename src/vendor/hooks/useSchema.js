import { useEffect, useState } from 'react'
import { _SERVER_URL } from '../../config/environment';
import { http } from '../services/http.service';

const useSchema = (collection) => {
    const [schema, setSchema] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSchema = async _ => {
            const result = await http.get(_SERVER_URL + 'schema');
            setSchema(result.data);
            setLoading(false);
        };
        loadSchema();
        return _ => { };
    }, []);

    return [collection ? schema[collection] : schema, loading];
}

export default useSchema;
