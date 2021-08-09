import React, { useCallback, useEffect, useState } from 'react'
import FormField from './FormField';

function Form({
    schema,
    labels,
    bgcolor = 'white',
    onChange = () => { },
    resetForm = null,
    errorsLabels,
    values = {},
    onSubmit,
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
            console.log(reset);
            const newValue = {};
            for (const el in schema) {
                newValue[el] = ''
            };
            console.log(newValue)
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

    return (
        <form {...props}>
            {Object.keys(schema).map(key => <FormField
                key={key}
                bgcolor={bgcolor}
                name={key}
                label={labels && labels[key] ? labels[key] : key}
                onChange={v => handleChange(v, key)}
                value={schema[key]}
                defaultValue={values[key]} />)}
        </form>
    )
}

export default Form
