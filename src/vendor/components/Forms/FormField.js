import React, { useState } from 'react'
import Flex from '../Containers/Flex';
import Birthday from './Birthday';
import Checkbox from './Checkbox';
import Input from './Input';
import Password from './Password';
import Upload from './Upload';

export default function FormField({
    name,
    label,
    value,
    onChange,
    bgcolor = 'white',
    defaultValue = '',
}) {
    const [type] = useState(typeof value === 'string' ?
        value.toLowerCase() : value.type.toLowerCase());

    return (
        <div>
            {['text', 'email', 'number'].includes(type) &&
                <Input value={defaultValue} name={name} type={type} bgcolor={bgcolor} onChange={e => onChange(e.target.value)} label={label} />}
            {type === 'password' && <Password value={defaultValue} name={name} bgcolor={bgcolor} onChange={e => onChange(e.target.value)} label={label} />}
            {type === 'file' && <Upload onUploadEnd={onChange} label={label} />}
            {type === 'date' && <Birthday onChange={onChange} label={label} />}
            {type === 'boolean' && <Flex gap={20}>
                <Checkbox onChange={onChange} /> <div>{label}</div>
            </Flex>}
        </div>
    )
}
