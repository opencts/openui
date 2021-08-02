import React from 'react'
import { useState } from 'react';
import Input from './Input';

function Search({
    color = 'primary',
    bgcolor = 'white',
    onSearch = () => { }
}) {

    const [actionIcon, setActionIcon] = useState('');
    const [reset, setReset] = useState(null);

    function handleChange(e) {
        onSearch(e.target.value);

        if (e.target.value.length === 0) {
            setActionIcon('');
        } else {
            setActionIcon('times')
        }
    }

    function handleAction() {
        onSearch('');
        setActionIcon('');
        setReset(true);
        setTimeout(() => {
            setReset(null);
        }, 500);
    }

    return (
        <Input
            color={color}
            onChange={handleChange}
            bgcolor={bgcolor}
            labelIcon="search"
            label="Rechercher..."
            resetInput={reset}
            actionIcon={actionIcon}
            onAction={handleAction}
        />
    )
}

export default Search
