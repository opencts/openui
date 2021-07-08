import React from 'react'

function Button({
    color = 'primary',
    rounded,
    outlined,
    raised,
    icon,
    children
}) {

    let css = 'btn bg-' + color;

    return (
        <button className={css}>
            {children}
        </button>
    )
}

export default Button
