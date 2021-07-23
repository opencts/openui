import React from 'react'

function DotsLoader({
    size = 10,
    color = 'primary',
    ...props
}) {

    const containerStyle = { width: (Number(size) * 4) + 'px' };
    const customStyle = {
        width: Number(size) + 'px',
        height: Number(size) + 'px',
        ...props.style
    };

    return (
        <div className="loader">
            <div className="dots" style={containerStyle}>
                <div style={customStyle} className={'dot bg-' + color} {...props}></div>
                <div style={customStyle} className={'dot bg-' + color} {...props}></div>
                <div style={customStyle} className={'dot bg-' + color} {...props}></div>
            </div>
        </div>
    )
}

export default DotsLoader
