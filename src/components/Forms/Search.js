import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Input from './Input';

function Search({
    color = 'primary',
    value = '',
    onSearch = () => { }
}) {

    const [searchValue, setValue] = useState('');
    const [actionIcon, setActionIcon] = useState('');

    useEffect(() => {
        setValue(value);
    }, [value]);

    function handleChange(e) {
        console.log(e.target.value)
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
            value={searchValue}
            onChange={handleChange}
            labelIcon="search"
            label="Rechercher..."
            actionIcon={actionIcon}
            onAction={handleAction}
        />
    )
}

export default Search
