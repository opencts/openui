import React from 'react'
import { Children } from 'react';
import { useRef } from 'react';

function Ripple({
    fromCenter = false,
    raised = false,
    expand = false,
    children,
    ...props
}) {

    const ref = useRef(null);

    function handleClick(event) {
        const { x, y, width, height } = ref.current.getBoundingClientRect();
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        if (fromCenter) {
            ripple.classList.toggle('ripple-center');
        } else {
            ripple.style.top = (event.clientY - y) + 'px';
            ripple.style.left = (event.clientX - x) + 'px';
            const size = Math.round(width > height ? width * 10 : height * 10);
            ripple.style.width = size + 'px';
            ripple.style.height = size + 'px';
            ripple.style.borderRadius = '50%';
            ripple.classList.toggle('ripple');
        }
        ref.current.appendChild(ripple);
        setTimeout(() => {
            if (ref.current)
                ref.current.removeChild(ripple);
        }, 300);
    }

    const newChildren = Children.map(children, child => {
        return React.cloneElement(child, {
            ...props
        });
    });

    if (expand) {
        return (
            <div
                onClick={handleClick}
                className={raised ? 'ripple-container-raised' : 'ripple-container'}
                style={{ width: '100%' }}
                ref={ref}>
                {newChildren}
            </div>
        )
    }

    return (
        <div onClick={handleClick} className={raised ? 'ripple-container-raised' : 'ripple-container'} ref={ref}>
            {newChildren}
        </div>
    )
}

export default Ripple;
