import React from 'react'
import Icon from '../Fonts/Icon'

function FloatingButton({
    color = 'primary',
    icon,
    size = '30',
    position = '',
    circled = true
}) {

    let css = 'floating bg-' + color;
    const customStyle = {
        width: size + 'px',
        height: size + 'px'
    }

    if (position !== '') {
        css += ' pos-' + position.split(/[ -,]/).join('-');
    }

    if (circled) {
        css += ' circled';
    }

    return (
        <div className={css} style={{ ...customStyle }}>
            <Icon name={icon} />
        </div>
    )
}

export default FloatingButton
