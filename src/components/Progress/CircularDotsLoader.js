import React from 'react'
import Icon from '../Fonts/Icon'

function CircularDotsLoader({
    color = 'primary',
    size = 40,
    ...props
}) {

    const customStyle = {
        fontSize: Number(size) + 'px',
        ...props.style
    };

    return (
        <div className="loader">
            <Icon color={color} className="spinner" name="spinner" style={customStyle} {...props} />
        </div>
    )
}

export default CircularDotsLoader
