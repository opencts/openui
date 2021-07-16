import React from 'react'

function Avatar({
    color = 'primary',
    img = null,
    size = 40,
    letter = null,
    ...props
}) {

    const customStyle = {
        width: size + 'px',
        height: size + 'px'
    };

    let css = 'avatar bg-' + color + (props.className ? ' ' + props.className : '');

    return (
        <div className="avatar-container">
            <div style={{ ...customStyle, ...props.style }} className={css}>
                {img && <img src={img} alt="AVATAAR" />}
                {letter && <div>{letter}</div>}
            </div>
        </div>
    )
}

export default Avatar
