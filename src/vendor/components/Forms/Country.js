import React, { useMemo } from 'react'
import _countries from '../../services/_countries'
import Select from './Select'

function Country({
    label = "Select a country",
    onChange = () => { },
    value = '---'
}) {

    const countries = useMemo(() => _countries, []);

    return (
        <Select
            data={countries}
            label={label}
            valueId="name"
            valueLabel="name"
            value={value}
            onChange={onChange} />
    )
}

export default Country
