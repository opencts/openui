import React, { useCallback } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { validate } from '../../services/validators'
import Flex from '../Containers/Flex'
import Icon from '../Fonts/Icon'

const _ERROR_MSGS = {
    email: 'Need a valid email address',
    min: value => `Your value must be greater than ${value - 1}`,
    max: value => `Your value must be less than ${value + 1}`,
    minLength: value => `${value} characters at least`,
    maxLength: value => `${value} characters at most`,
    pattern: 'Invalid format',
    required: 'This field is required',
    password: ({ min, strong }) => strong ?
        '8 characters at least - Lowercase, upperCase, number and character among -- !@#%^&*_ = -- are required' :
        `${min} characters at least`,
    date: 'Year is required'
};

function Input({
    color = 'primary',
    bgcolor = 'white',
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
    forSelect = false,
    onChange = () => { },
    onAction = () => { },
    onActionChange = () => { },
    ...props
}) {

    const labelRef = useRef(null);
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [flipAction, setFlipAction] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const fieldRef = useRef(null);

    const changeFocus = useCallback((target) => {
        console.log();
        if (target.length === 0 && document.activeElement !== inputRef.current) {
            labelRef.current.className = 'bg-' + bgcolor;
        } else {
            labelRef.current.className = 'label-animation bg-' + bgcolor;
        }
    }, [bgcolor]);

    const handleInputFocus = useCallback(() => {
        changeFocus(inputValue);
    }, [inputValue, changeFocus]);

    const handleErrors = useCallback((value) => {
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
            if (typeof (errorMsgs[error]) === 'function') {
                setErrorMsg(errorMsgs[error](conditions[error]));
            } else {
                setErrorMsg(errorMsgs[error]);
            }
        } else {
            setErrorMsg('');
        }
    }, [errorMsgs, lowerChars, min, props, required, specialChars, strong, type, upperChars]);

    const handleChange = (e) => {
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
        changeFocus(v);
    }

    useEffect(() => {
        setInputValue(value);
        changeFocus(value);
    }, [value, changeFocus]);

    return (
        <div className="form-field-container" ref={fieldRef}>
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
                            onBlur={handleInputFocus}
                            {...props} />
                        {actionIcon && !flipAction &&
                            <div className="pr-2">
                                <Icon
                                    color={color}
                                    name={actionIcon}
                                    onClick={() => {
                                        if (actionIconFlip)
                                            setFlipAction(!flipAction);
                                        onAction();
                                        handleInputFocus();
                                    }} />
                            </div>}
                        {actionIconFlip && flipAction &&
                            <div className="pr-2">
                                <Icon
                                    name={actionIconFlip}
                                    color={color}
                                    onClick={() => {
                                        setFlipAction(!flipAction);
                                        onActionChange();
                                        handleInputFocus();
                                    }} />
                            </div>}
                    </Flex>
                </div>
                <div className="label">
                    <label ref={labelRef} className={'bg-' + bgcolor}>
                        <Flex ai="center" gap={0}>
                            {labelIcon && <Icon color={color} name={labelIcon} className="icon-left" />}
                            <span className={'label-message text-' + color}>
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
            </div>
            <span className="hint">{errorMsg}</span>
        </div>
    )
}

export default Input
