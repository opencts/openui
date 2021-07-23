import React from 'react'
import Icon from '../Fonts/Icon';

function Avatar({
    color = 'primary',
    img = null,
    size = 40,
    letter = null,
    icon = null,
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
                {img && <img src={img} alt="AVATAR" />}
                {letter && <div>{letter}</div>}
                {icon && <Icon name={icon} />}
            </div>
        </div>
    )
}

export default Avatar
