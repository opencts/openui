import React, { useEffect, useRef } from 'react'

const ClickAwayListener = ({
    children,
    onClose
}) => {

    const eltRef = useRef();

    useEffect(() => {
        function listener(e) {
            if (eltRef && eltRef.current && !eltRef.current.contains(e.target)) {
                onClose();
            }
        };
        window.addEventListener('scroll', e => onClose());
        window.addEventListener('click', e => listener(e));
        return () => {
            window.removeEventListener('scroll', e => onClose());
            window.removeEventListener('click', e => listener(e));

        };
    }, [onClose]);

    return (
        <div ref={eltRef}>
            {children}
        </div>
    )
}

export default ClickAwayListener
