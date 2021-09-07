import React, { useState } from 'react'
import { _ERROR_MSGS } from '../../services/validators';
import Input from './Input'

function Password({
    label = 'Mot de passe',
    icon = true,
    strong = true,
    lowerChars = false,
    upperChars = false,
    specialChars = false,
    numericChars = false,
    min = '8',
    errorMsg = _ERROR_MSGS.password,
    onChange = _ => { },
    ...props
}) {

    const [type, setType] = useState('password');

    function handleAction() {
        setType('text');
    }

    function handleActionChange() {
        setType('password');
    }

    function handleChange(e) {
        onChange(e);
    }

    return (
        <Input
            label={label}
            type={type}
            labelIcon={icon && 'lock'}
            actionIcon="eye"
            actionIconFlip="eyeSlash"
            errorMsgs={{ password: errorMsg }}
            onAction={handleAction}
            onChange={handleChange}
            strong={strong}
            lowerChars={lowerChars}
            upperChars={upperChars}
            specialChars={specialChars}
            numericChars={numericChars}
            min={min}
            onActionChange={handleActionChange}
            {...props} />
    )
}

export default Password
