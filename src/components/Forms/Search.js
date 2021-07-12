import React from 'react'
import { useState } from 'react';
import Input from './Input';

function Search({
    color = 'primary',
    onSearch = () => { }
}) {

    const [value, setValue] = useState('');
    const [actionIcon, setActionIcon] = useState('');

    function handleChange(e) {
        setValue(e.target.value);
        onSearch(e.target.value);

        if (e.target.value.length === 0) {
            setActionIcon('');
        } else {
            setActionIcon('times')
        }
    }

    function handleAction() {
        setValue('');
        onSearch('');
        setActionIcon('');
    }

    return (
        <Input
            color={color}
            value={value}
            onChange={handleChange}
            labelIcon="search"
            label="Rechercher..."
            actionIcon={actionIcon}
            onAction={handleAction}
        />
    )
}

export default Search
