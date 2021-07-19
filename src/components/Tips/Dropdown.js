/* eslint-disable react-hooks/exhaustive-deps */
import React, { Children, cloneElement, useCallback, useEffect, useRef, useState } from 'react'

function Dropdown({
    component,
    color = 'light',
    position = 'bottom',
    width = '200',
    children,
    ...props
}) {
    const [style, setStyle] = useState({ ...props.style });
    const [dropdownContent, setDropdownContent] = useState(null);
    const [actions, setActions] = useState({});
    const [visible, setVisible] = useState(false);
    const childrenRef = useRef(null);

    const show = useCallback((e) => {
        setVisible(true);
    }, []);

    const hide = useCallback((e) => {
        setVisible(false);
    }, []);

    useEffect(() => {

        if ([...childrenRef.current.parentElement.classList].includes('dropdown')) {
            childrenRef.current.style.width = (Number(width) - 10) + 'px';
        }

        // Handle style
        const s = {};
        s.width = ([...childrenRef.current.parentElement.classList].includes('dropdown') ? (Number(width) - 10) : width) + 'px';
        setStyle(style => ({ ...style, ...s }));

        actions.onClick = e => show(e);
        setActions(actions => ({ ...actions }));

        // Handle hide event
        const newChildren = Children.map(children, child => {
            return cloneElement(child, { onClick: e => hide(e), style });
        });
        setDropdownContent(newChildren);
    }, [color, position, width, children, show, hide]);

    useEffect(() => {
        const cb = (event) => {
            if (childrenRef && childrenRef.current && !childrenRef.current.contains(event.target)) {
                if (visible) {
                    setVisible(false);
                }
            }
        };
        window.addEventListener('click', e => cb(e));
        return window.removeEventListener('click', e => cb(e));
    }, [visible]);

    return (
        <div className="dropdown-container" {...actions} ref={childrenRef}>
            {component()}
            {visible && <div className={`dropdown bg-${color} dropdown-${position}`} style={style} {...props}>
                {dropdownContent}
            </div>}
        </div>
    )
}

export default Dropdown
