import React from 'react'

function BarsLoader({
    size = 10,
    color = 'primary',
    ...props
}) {

    const containerStyle = { width: (Number(size) * 4) + 'px' };
    const customStyle = {
        width: Number(size) + 'px',
        height: (Number(size) + (Number(size) / 2)) + 'px',
        ...props.style
    };

    return (
        <div className="loader">
            <div className="bars" style={containerStyle}>
                <div style={customStyle} className={'bar bg-' + color} {...props}></div>
                <div style={customStyle} className={'bar bg-' + color} {...props}></div>
                <div style={customStyle} className={'bar bg-' + color} {...props}></div>
            </div>
        </div>
    )
}

export default BarsLoader
