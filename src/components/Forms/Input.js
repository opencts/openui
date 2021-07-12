import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { validate, _ERROR_MSGS } from '../../services/validators'
import Flex from '../Containers/Flex'
import Icon from '../Fonts/Icon'

function Input({
    color = 'primary',
    labelIcon,
    actionIcon,
    actionIconFlip,
    label,
    hint,
    type = 'text',
    required = false,
    errorMsgs = _ERROR_MSGS,
    contentCase = 'default',
    step = 1,
    value = '',
    strong = true,
    lowerChars = false,
    upperChars = false,
    specialChars = false,
    numericChars = false,
    min = '8',
    onChange = () => { },
    onAction = () => { },
    onActionChange = () => { },
    ...props
}) {

    const labelRef = useRef(null);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState(value);
    const [flipAction, setFlipAction] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    function handleInputFocus() {
        if (inputValue.length === 0) {
            labelRef.current.classList.toggle('label-animation');
        } else {
            labelRef.current.className = 'label-animation';
        }
    }

    useEffect(() => {
        setInputValue(value);
        inputRef.current.focus();
    }, [value]);

    function handleInputBlur() {
        if (inputValue.length === 0) {
            labelRef.current.classList.toggle('label-animation');
        } else {
            labelRef.current.className = 'label-animation';
        }
    }

    function handleErrors(value) {
        const attrs = ['min', 'max', 'minLength', 'maxLength', 'pattern']
        const conditions = {};

        if (required) {
            conditions['required'] = true
        };

        for (const el of attrs) {
            if (props[el]) {
                conditions[el] = props[el];
            }
        }

        if (type === 'email') {
            conditions.email = true;
        }

        if (type === 'password') {
            conditions.password = {
                strong,
                lowerChars,
                upperChars,
                specialChars,
                min
            };
        }

        const errorState = validate(value, conditions);
        if (!errorState.valid) {
            const error = errorState.errors[0];
            console.log(error, conditions[error], errorMsgs[error])
            if (typeof (errorMsgs[error]) === 'function') {
                setErrorMsg(errorMsgs[error](conditions[error]));
            } else {
                setErrorMsg(errorMsgs[error]);
            }
        } else {
            setErrorMsg('');
        }
    }

    function handleChange(e) {
        let v = e.target.value;
        if (contentCase === 'lower') {
            v = v.toLowerCase();
        }
        if (contentCase === 'upper') {
            v = v.toUpperCase();
        }
        setInputValue(v);
        onChange({ ...e, target: { ...e.target, value: v } });
        handleErrors(v);
    }

    return (
        <div className="form-field-container">
            <div className={'form-field text-' + color}>
                <div className={'input border-' + color}>
                    <Flex ai="center">
                        <input
                            ref={inputRef}
                            type={type}
                            step={step}
                            value={inputValue}
                            onChange={handleChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            {...props} />
                        {actionIcon && !flipAction &&
                            <Icon
                                color={color}
                                name={actionIcon}
                                onClick={() => {
                                    if (actionIconFlip)
                                        setFlipAction(!flipAction);
                                    onAction();
                                }} />}
                        {actionIconFlip && flipAction &&
                            <Icon
                                name={actionIconFlip}
                                color={color}
                                onClick={() => {
                                    setFlipAction(!flipAction);
                                    onActionChange();
                                }} />}
                    </Flex>
                </div>
                <label ref={labelRef}>
                    <Flex ai="center">
                        {labelIcon && <Icon color={color} name={labelIcon} className="icon-left" />}
                        <span className="label-message">
                            {label}
                            {required &&
                                <span className="text-danger">
                                    <Icon
                                        color={color}
                                        name="asterisk"
                                        style={{ fontSize: '7px', transform: 'translateY(-5px) translateX(5px)' }} />
                                </span>}
                        </span>
                    </Flex>
                </label>
            </div>
            <span className="hint">{errorMsg}</span>
        </div>
    )
}

export default Input
