import React, { useEffect, useState } from 'react'
import { useStore } from '../../services/Store';
import Flex from '../Containers/Flex';
import CircularLoader from '../Progress/CircularLoader';
import Birthday from './Birthday';
import Checkbox from './Checkbox';
import Input from './Input';
import Password from './Password';
import Select from './Select';
import Upload from './Upload';

export default function FormField({
    name,
    label,
    value,
    onChange,
    bgcolor = 'white',
    defaultValue = '',
    errorMsgs = null,
    refLabel = null,
    ...props
}) {

    const [type] = useState(typeof value === 'string' ?
        value.toLowerCase() : value.type.toLowerCase());
    const [data, setData] = useState([]);
    // const { all } = useStore();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof value === 'object' && value.type === 'ObjectId') {
            // all(value.ref).then(d => {
            //     setData(d);
            //     setLoading(false);
            // });
        } else {
            setLoading(false);
        }
    }, [value]);

    if (loading) return <CircularLoader />;

    return (
        <div>
            {['text', 'email', 'number'].includes(type) &&
                <Input value={defaultValue} name={name} type={type} bgcolor={bgcolor} onChange={e => onChange(e.target.value)} errorMsgs={errorMsgs} label={label} {...props} />}
            {type === 'password' && <Password value={defaultValue} name={name} bgcolor={bgcolor} onChange={e => onChange(e.target.value)} errorMsgs={errorMsgs} label={label} {...props} />}
            {type === 'file' && <Upload onUploadEnd={onChange} errorMsgs={errorMsgs} label={label} {...props} />}
            {type === 'date' && <Birthday onChange={onChange} errorMsgs={errorMsgs} label={label} {...props} />}
            {type === 'boolean' && <Flex gap={20}>
                <Checkbox onChange={onChange} /> <div>{label}</div>
            </Flex>}
            {type === 'objectid' && <Select data={data} bgcolor={bgcolor} valueId="id" valueLabel={refLabel} />}
        </div>
    )
}
