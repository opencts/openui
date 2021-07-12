import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'
import Search from './Search'

function Select({
    label = 'Select',
    color = 'primary',
    searcheable = true,
    data,
    onChange = _ => { },
    valueId = 'id',
    valueLabel = 'name',
    ...props
}) {

    const optionsRef = useRef(null);
    const selectRef = useRef(null);

    const [value, setValue] = useState({
        [valueId]: '',
        [valueLabel]: ''
    });
    const [disabled, setDisabled] = useState(false);
    const [values, setValues] = useState(data);

    function openSelect(event) {
        optionsRef.current.classList.toggle('options-show');
        event.stopPropagation();
        setDisabled(true);
    }

    function selectItem(item) {
        setValue(item);
        onChange(item[valueId]);
        optionsRef.current.className = 'options';
    }

    function searchValue(value) {
        const s = [];
        const transformed = data.map(it => Object.values(it).join(' ').toLowerCase());
        let v = value.toLowerCase();
        for (let i = 0; i < data.length; i++) {
            if (transformed[i].indexOf(v) !== -1) {
                s.push(data[i]);
            }
        }
        setValues(s);
    }

    useEffect(() => {
        const cb = (event) => {
            if (optionsRef && optionsRef.current && !optionsRef.current.contains(event.target)) {
                if (optionsRef.current.className.indexOf('show') !== -1) {
                    optionsRef.current.className = 'options';
                }
            }
        };
        window.addEventListener('click', e => cb(e));
        return window.removeEventListener('click', e => cb(e));
    }, []);

    function renderOptions() {
        return <div className="mt-2">
            {values.map((item, index) => <div className="options-item" key={index} onClick={_ => selectItem(item)}>
                {item[valueLabel]}
            </div>)}
        </div>
    }

    return (
        <div ref={selectRef} className="select" onClick={openSelect}>
            <Input
                value={value[valueLabel]}
                color={color}
                label={label}
                disabled={disabled}
                actionIcon="angleDown"
                {...props} />
            <div className="options" ref={optionsRef} onClick={e => e.stopPropagation()}>
                {searcheable && <div className="mt-2">
                    <Search color={color} onSearch={v => searchValue(v)} />
                </div>}
                {renderOptions()}
            </div>
        </div>
    )
}

export default Select
