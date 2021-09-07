import React, { useMemo, useRef, useState } from 'react'
import ClickAwayListener from '../Containers/ClickAwayListener';
import { createPortal } from 'react-dom';
const Dropdown = ({
    component = null,
    color = 'light',
    maxHeight = '250px',
    position = 'bottom',
    children
}) => {

    const [open, setOpen] = useState(false);
    const [computedStyle, setComputedStyle] = useState({});
    const parentRef = useRef();

    const handleClick = () => {
        if (!open) {
            const parentRect = parentRef.current.getBoundingClientRect();
            const newStyle = { minWidth: parentRect.width };
            switch (position) {
                case 'left':
                    newStyle.right = window.innerWidth - parentRect.left;
                    newStyle.top = parentRect.top;
                    break;
                case 'right':
                    newStyle.left = parentRect.left + parentRect.width + 1;
                    newStyle.top = parentRect.top;
                    break;
                case 'top':
                    newStyle.bottom = window.innerHeight - parentRect.top + 1;
                    break;
                case 'bottom':
                    newStyle.top = parentRect.top + parentRect.height + 1;
                    newStyle.left = parentRect.left;
                    break;
                default:
                    break;
            }
            setComputedStyle(computedStyle => ({ ...computedStyle, ...newStyle }));
        }
        setOpen(!open);
    }

    const cusStyle = useMemo(() => ({
        maxHeight
    }), [maxHeight]);

    const onOpen = (e) => {
        e.stopPropagation();
    };

    return (
        <ClickAwayListener onClose={_ => setOpen(false)}>
            <div className="dropdown-container" onClick={handleClick} ref={parentRef}>
                {typeof component === 'function' ? component() : component}
                {open && createPortal(<div className={'dropdown bg-' + color} style={{ ...cusStyle, ...computedStyle }} onClick={onOpen}>
                    {children}
                </div>, document.getElementById('portal'))}
            </div>
        </ClickAwayListener>
    )
}

export default Dropdown