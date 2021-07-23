import React from 'react'
import _THEME_COLORS from '../../services/_colors'

function DoubleCircularLoader({
    color = 'primary',
    size = 40,
    borderSize = 3,
    ...props
}) {

    const customStyle = {
        width: Number(size) + 'px',
        height: Number(size) + 'px',
        border: `solid ${Number(borderSize)}px ${_THEME_COLORS.$lightgray}`,
        borderTop: `solid ${Number(borderSize)}px ${_THEME_COLORS['$' + color]}`,
        borderBottom: `solid ${Number(borderSize)}px ${_THEME_COLORS['$' + color]}`,
        ...props.style
    }

    return (
        <div className="loader">
            <div className="circular" style={customStyle} {...props}></div>
        </div>
    )
}

export default DoubleCircularLoader
