import React, { useEffect, useState } from 'react'
import Icon from '../Fonts/Icon';

function Checkbox({
    color = 'primary',
    onChange = _ => { },
    size = 10,
    checked = false
}) {

    const [value, setValue] = useState(checked);

    useEffect(() => {
        setValue(checked);
        onChange(checked);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checked]);

    function handleChange() {
        setValue(!value);
        onChange(!value);
    }

    return (
        <div onClick={handleChange} className="checkbox">
            <div className={value ? 'checkmark border-' + color + ' bg-' + color + ' text-light': 'checkmark border-' + color}>
                <Icon
                    color={value ? 'light' : color}
                    style={{
                        visibility: value ? 'visible' : 'hidden',
                        fontSize: size + 'px',
                        verticalAlign: 0
                    }} name="check" />
            </div>
        </div>
    )
}

export default Checkbox
