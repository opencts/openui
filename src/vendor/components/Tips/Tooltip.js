import React, { useEffect, useState } from 'react'

function Tooltip({
    title = '',
    color = 'dark',
    position = 'top',
    maxWidth = '200',
    children,
    ...props
}) {

    const [style, setStyle] = useState({ ...props.style });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const s = {};
        s.maxWidth = maxWidth + 'px';
        setStyle(style => ({ ...style, ...s }));
    }, [title, color, position, maxWidth]);

    function show(e) {
        setVisible(true);
    }

    function hide(e) {
        setVisible(false);
    }

    return (
        <div className="tooltip-container" onMouseOver={e => show(e)} onMouseLeave={e => hide(e)}>
            {children}
            {visible && <div className={`tooltip bg-${color} tooltip-${position}`} style={style} {...props}>
                {title}
            </div>}
        </div>
    )
}

export default Tooltip
