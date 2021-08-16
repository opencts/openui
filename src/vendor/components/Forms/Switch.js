import React, { useState } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react'

function Switch({
    color = 'primary',
    checked = false,
    onChange = () => { }
}) {

    const [switched, setSwitched] = useState(checked);
    const ref = useRef();

    function handleChange() {
        setSwitched(!switched)
    }

    useEffect(() => {
        if (switched) {
            window.document.getElementsByClassName('switch')[0].style.left = '50%'
        }
        else {
            window.document.getElementsByClassName('switch')[0].style.left = '0%'
        }
        onChange(switched);
        // eslint-disable-next-line
    }, [switched]);

    let css = !switched ? 'bg-dark-gray' : 'bg-' + color

    return (
        <div onClick={handleChange} className={'switch-bar ' + css}>
            <div className='switch' ref={ref}></div>
        </div>
    )
}

export default Switch
