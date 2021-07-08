import React from 'react'
import { useRef } from 'react';

function Ripple({
    fromCenter = false,
    children
}) {

    const ref = useRef(null);

    function handleClick(event) {
        const { x, y } = ref.current.getBoundingClientRect();
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        if (fromCenter) {
            ripple.classList.toggle('ripple-center');
        } else {
            ripple.style.top = (event.clientY - y) + 'px';
            ripple.style.left = (event.clientX - x) + 'px';
            ripple.classList.toggle('ripple');
        }
        ref.current.appendChild(ripple);
    }

    return (
        <div onClick={handleClick} className="ripple-container" ref={ref}>
            {children}
        </div>
    )
}

export default Ripple
