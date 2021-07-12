import React from 'react'
import { Children } from 'react';
import { useRef } from 'react';

function Ripple({
    fromCenter = false,
    raised = false,
    children,
    ...props
}) {

    const ref = useRef(null);

    function handleClick(event) {
        const ripples = ref.current.querySelectorAll('.ripple');
        // for
        const { x, y } = ref.current.getBoundingClientRect();
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        if (fromCenter) {
            ripple.classList.toggle('ripple-center');
        } else {
            ripple.style.top = (event.clientY - y) + 'px';
            ripple.style.left = (event.clientX - x) + 'px';
            ripple.style.borderRadius = '100px';
            ripple.classList.toggle('ripple');
        }
        ref.current.appendChild(ripple);
    }

    const newChildren = Children.map(children, child => {
        return React.cloneElement(child, {
            ...props
        });
    });

    return (
        <div onClick={handleClick} className={raised ? 'ripple-container-raised': 'ripple-container'} ref={ref}>
            {newChildren}
        </div>
    )
}

export default Ripple
