import React, { useEffect, useState } from 'react'
import { firebaseUploadFile } from '../../config/firebase.config';
import { useClientDB } from '../../services/ClientDBProvider';
import { reformatDateForInput } from '../../services/utils';
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
    const { db } = useClientDB();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (typeof value === 'object' && value.type === 'ObjectId') {
            setData(db[value.ref])
        }
        setLoading(false);
    }, [value, db]);

    if (loading) return <CircularLoader />;

    console.log(reformatDateForInput(new Date(defaultValue).toLocaleDateString()))

    return (
        <div>
            {['text', 'email', 'number'].includes(type) &&
                <Input value={defaultValue} name={name} type={type} bgcolor={bgcolor} onChange={e => onChange(e.target.value)} errorMsgs={errorMsgs} label={label} {...props} />}
            {type === 'password' && <Password value={defaultValue} name={name} bgcolor={bgcolor} onChange={e => onChange(e.target.value)} errorMsgs={errorMsgs} label={label} {...props} />}
            {type === 'file' && <Upload uploadFunction={firebaseUploadFile} onUploadEnd={onChange} errorMsgs={errorMsgs} label={label} {...props} />}
            {type === 'date' && <Input value={reformatDateForInput(new Date(defaultValue).toLocaleDateString())} name={name} type="date" bgcolor={bgcolor} onChange={e => onChange(e.target.value)} errorMsgs={errorMsgs} label={label} {...props} />}
            {/* {type === 'date' && <Birthday onChange={onChange} errorMsgs={errorMsgs} label={label} {...props} />} */}
            {type === 'boolean' && <Flex gap={20}>
                <Checkbox onChange={onChange} /> <div>{label}</div>
            </Flex>}
            {type === 'objectid' && <Select label={label} data={data} value={defaultValue} onChange={v => onChange(v.id)} bgcolor={bgcolor} valueId="id" valueLabel={refLabel} />}
        </div>
    )
}
