import React, { useCallback, useEffect, useState } from 'react'
import FormField from './FormField';

function Form({
    schema,
    labels,
    bgcolor = 'white',
    onChange = () => { },
    resetForm = null,
    errorsLabels,
    onSubmit
}) {

    const [value, setValue] = useState({});
    const [reset, setReset] = useState(resetForm);

    useEffect(() => {
        setReset(resetForm);
    }, [resetForm]);

    useEffect(() => {
        if (reset) {
            const newValue = {};
            for (const el in schema) {
                newValue[el] = ''
            };
            setValue(newValue);
            setReset(null);
        }
    }, [reset]);

    const handleChange = useCallback((v, name) => {
        setValue({ ...value, [name]: v });
        onChange({ ...value, [name]: v });
    }, [value]);

    return (
        <form>
            {Object.keys(schema).map(key => <FormField
                key={key}
                bgcolor={bgcolor}
                name={key}
                label={labels && labels[key] ? labels[key] : key}
                onChange={v => handleChange(v, key)}
                value={schema[key]} />)}
        </form>
    )
}

export default Form
