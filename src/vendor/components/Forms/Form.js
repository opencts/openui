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
    onReset = () => { },
    buttonText = 'Create',
    resetText = 'Reset',
    showReset = true,
    hiddens = ['createdAt', 'lastUpdatedAt', 'enabled'],
    refs,
    ...props
}) {

    const [value, setValue] = useState(values);

    useEffect(() => {
        if (Object.keys(values).length === 0) {
            const newValue = {};
            for (const el in schema) {
                newValue[el] = ''
            };
            setValue(() => ({ ...newValue }));
        } else {
            setValue(() => values);
        }
    }, [values]);

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
        onReset();
    };

    return (
        <div className="mb-2 mt-2">
            <form className="responsive-grid" {...props}>
                {Object.keys(schema).filter(it => !hiddens.includes(it)).map(key => <FormField
                    key={key}
                    bgcolor={bgcolor}
                    name={key}
                    label={labels && labels[key] ? labels[key] : key}
                    onChange={v => handleChange(v, key)}
                    value={schema[key]}
                    errorMsgs={errorMsgs}
                    defaultValue={value[key]}
                    refLabel={refs ? refs[key] : null}
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
