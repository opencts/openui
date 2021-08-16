import React, { useCallback, useEffect, useState } from 'react'
import { deepCopie } from '../../services/utils';
import FormField from './FormField';

function Form({
    schema,
    labels,
    bgcolor = 'white',
    onChange = () => { },
    resetForm = null,
    errorMsgs,
    values = {},
    onSubmit,
    refs,
    ...props
}) {

    const [value, setValue] = useState(values);
    const [reset, setReset] = useState(resetForm);

    useEffect(() => {
        setReset(resetForm);
    }, [resetForm]);

    useEffect(() => {
        console.log(reset);
        if (reset) {
            const newValue = {};
            for (const el in schema) {
                newValue[el] = ''
            };
            setValue({ ...newValue });
            setReset(null);
        }

        // eslint-disable-next-line
    }, [reset]);

    const handleChange = useCallback((v, name) => {
        setValue({ ...value, [name]: v });
        onChange({ ...value, [name]: v });

        // eslint-disable-next-line
    }, [value]);

    const getValidation = (key) => {
        if (typeof schema[key] === 'object') {
            const s = deepCopie(schema[key]);
            delete s['type'];
            delete s['ref'];
            return { ...s }
        }
        return {}
    };

    return (
        <form {...props}>
            {Object.keys(schema).map(key => <FormField
                key={key}
                bgcolor={bgcolor}
                name={key}
                label={labels && labels[key] ? labels[key] : key}
                onChange={v => handleChange(v, key)}
                value={schema[key]}
                errorMsgs={errorMsgs}
                defaultValue={values[key]}
                refLabel={refs ? refs[schema[key].ref] : null}
                {...getValidation(key)} />)}
        </form>
    )
}

export default Form
