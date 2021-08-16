import React from 'react'
import _THEME_COLORS from '../../services/_colors';
import Icon from '../Fonts/Icon'

function FloatingButton({
    color = 'primary',
    icon,
    size = '30',
    position = '',
    elevation = 9,
    circled = true
}) {

    let css = 'floating bg-' + color;
    const customStyle = {
        width: size + 'px',
        height: size + 'px',
        boxShadow: `0 0 ${elevation}px 0 ${_THEME_COLORS.$gray}`
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
