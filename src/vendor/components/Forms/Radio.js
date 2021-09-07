import React, {useState, useEffect} from 'react'
import { reverseColor } from '../../services/_colors';
import Icon from '../Fonts/Icon';

function Radio({
    color = 'primary',
    onChange = _ => {},
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
            <div className={value ? 'radiomark border-' + color + ' bg-' + color + ' text-light': 'radiomark border-' + color}>
                <Icon
                    className={'radioIcon bg-' + color }
                    color={value ? reverseColor(color) : color}
                    style={{
                        visibility: value ? 'visible' : 'hidden',
                        fontSize: size + 'px',
                        verticalAlign: 0
                    }} name="stop" 
                />
            </div>

        </div>
    )
}

export default Radio
