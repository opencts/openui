import React, { useEffect, useMemo, useState } from 'react'
import Flex from '../Containers/Flex';
import Select from './Select'
import { _ERROR_MSGS } from '../../services/validators';
import Font from '../Fonts/Font';

function Birthday({
    onChange = _ => { },
    errorMsg = _ERROR_MSGS.date,
    color = 'primary',
    label = '',
    required = true
}) {

    const [value, setValue] = useState({
        day: null,
        month: null,
        year: null
    });
    const [error, setError] = useState('');

    const days = useMemo(() => {
        const d = [];
        for (let i = 1; i < 32; i++) {
            d.push({ value: i });
        }
        return d;
    }, []);

    const months = useMemo(() => [
        { name: 'Jan', value: '1' },
        { name: 'Feb', value: '2' },
        { name: 'Mar', value: '3' },
        { name: 'Apr', value: '4' },
        { name: 'May', value: '5' },
        { name: 'Jun', value: '6' },
        { name: 'Jul', value: '7' },
        { name: 'Aug', value: '8' },
        { name: 'Sep', value: '9' },
        { name: 'Oct', value: '10' },
        { name: 'Nov', value: '11' },
        { name: 'Dec', value: '12' },
    ], []);

    const years = useMemo(() => {
        const d = [];
        for (let i = new Date().getFullYear(); i > 1899; i--) {
            d.push({ value: i });
        }
        return d;
    }, []);

    useEffect(() => {
        onChange(value);
        if (required) {
            if (!value.year) {
                setError(errorMsg);
            } else {
                setError('');
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return (
        <div className="birthday">
            <Font color={color} style={{
                transform: 'translateY(6px)'
            }}>{label}</Font>
            <Flex gap={10}>
                <Select
                    searcheable={false}
                    label="Day"
                    color={color}
                    data={days}
                    onChange={v => setValue({ ...value, day: v })}
                    valueId="value"
                    valueLabel="value"
                />
                <Select
                    searcheable={false}
                    label="Month"
                    data={months}
                    color={color}
                    onChange={v => setValue({ ...value, month: v })}
                    valueId="value"
                    valueLabel="name" />
                <Select
                    searcheable={false}
                    label="Year"
                    data={years}
                    color={color}
                    onChange={v => setValue({ ...value, year: v })}
                    valueId="value"
                    valueLabel="value" />
            </Flex>
            <div style={{
                transform: 'translateY(-16px)'
            }} className="hint">{error}</div>
        </div>
    )
}

export default Birthday
