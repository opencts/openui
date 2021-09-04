import React, { useCallback, useEffect, useState } from 'react'
import { deepCopie } from '../../services/utils';
import Flex from '../Containers/Flex';
import Button from './Button';
import FormField from './FormField';

function Form({
    schema,
    labels,
    bgcolor = 'white',
    onChange = () => { },
    errorMsgs,
    values = {},
    onSubmit = () => { },
    buttonText = 'Create',
    resetText = 'Reset',
    showReset = true,
    refs,
    ...props
}) {

    const [value, setValue] = useState(values);

    useEffect(() => {
        setValue(values);
    }, [values]);

    useEffect(() => {
        const newValue = {};
        for (const el in schema) {
            newValue[el] = ''
        };
        setValue({ ...newValue });

        // eslint-disable-next-line
    }, []);

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

    const handleSubmit = () => {
        onSubmit(value);
        resetForm();
    };

    const resetForm = () => {
        const newValue = {};
        for (const el in schema) {
            newValue[el] = ''
        };
        setValue({ ...newValue });
    };

    return (
        <div className="mb-2">
            <form {...props}>
                {Object.keys(schema).map(key => <FormField
                    key={key}
                    bgcolor={bgcolor}
                    name={key}
                    label={labels && labels[key] ? labels[key] : key}
                    onChange={v => handleChange(v, key)}
                    value={schema[key]}
                    errorMsgs={errorMsgs}
                    defaultValue={value[key]}
                    refLabel={refs ? refs[schema[key].ref] : null}
                    {...getValidation(key)} />)}
            </form>
            <Flex gap={10}>
                <Button onClick={handleSubmit}>{buttonText}</Button>
                {showReset && <Button color="dark-gray" onClick={resetForm}>{resetText}</Button>}
            </Flex>
        </div>
    )
}

export default Form
