import React from 'react'
import { useState } from 'react';
import Input from './Input';

function Search({
    color = 'primary',
    bgcolor = 'white',
    onSearch = () => { }
}) {

    const [actionIcon, setActionIcon] = useState('');
    const [searchValue, setSearchValue] = useState('');

    function handleChange(e) {
        onSearch(e.target.value);
        setSearchValue(e.target.value);

        if (e.target.value.length === 0) {
            setActionIcon('');
        } else {
            setActionIcon('times')
        }
    }

    function handleAction() {
        onSearch('');
        setActionIcon('');
        setSearchValue('');
    }

    return (
        <Input
            color={color}
            onChange={handleChange}
            bgcolor={bgcolor}
            labelIcon="search"
            value={searchValue}
            label="Rechercher..."
            actionIcon={actionIcon}
            onAction={handleAction}
        />
    )
}

export default Search
