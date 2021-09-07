import React, { useEffect, useMemo, useRef, useState } from 'react'
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';
import Input from './Input'
import Search from './Search'

function Select({
    label = 'Select',
    color = 'primary',
    searcheable = true,
    data = [],
    onChange = _ => { },
    valueId = 'id',
    valueLabel = 'name',
    multiple = false,
    bgcolor = 'white',
    ...props
}) {

    const optionsRef = useRef(null);
    const selectRef = useRef(null);

    const [disabled, setDisabled] = useState(false);
    const [values, setValues] = useState(data.length > 0 ? [data[0]] : []);
    const [vdata, setVdata] = useState(data);
    const [selected, setSelected] = useState(data.map(it => false));

    function openSelect(event) {
        optionsRef.current.classList.toggle('options-show');
        event.stopPropagation();
        setDisabled(true);
    }

    function selectItem(item, index) {
        const v = JSON.parse(JSON.stringify(values));
        if (!multiple) {
            setValues([item]);
            onChange(item);
            optionsRef.current.className = 'options';
        }
        else {
            if (!selected[index]) {
                setValues([...v, item]);
                onChange([...v, item].map(it => it[valueId]));
            } else {
                setValues(v.filter(el => el[valueId] !== item[valueId]));
                onChange(v.filter(el => el[valueId] !== item[valueId]));
            }
            selected[index] = !selected[index];
            setSelected([...selected]);
        }
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
        setVdata(s);
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
            {vdata.map((item, index) => <div className="options-item" key={index} onClick={_ => selectItem(item, index)}>
                <Flex ai="center" jc="space-between">
                    <div>{item[valueLabel]}</div>
                    {selected[index] && <Icon name="check" color={color} />}
                </Flex>
            </div>)}
        </div>
    }

    const selectedValue = useMemo(() => values.map(it => it[valueLabel]), [values, valueLabel]);

    return (
        <div ref={selectRef} className="select" onClick={openSelect}>
            <Input
                value={selectedValue}
                color={color}
                label={label}
                forSelect
                bgcolor={bgcolor}
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
