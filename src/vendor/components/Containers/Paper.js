import React, { useEffect, useState } from 'react'
import _THEME_COLORS from '../../services/_colors';

function Paper({
    rounded = false,
    color = 'light',
    elevation = '1',
    hoverColor = 'light',
    radius = '1',
    width = '',
    height = '',
    children,
    ...props
}) {

    const css = 'bg-' + color + (rounded ? ' circled' : '') + (props.className ?  (' ' + props.className): '');

    const [customStyle, setCustomStyle] = useState({});

    useEffect(() => {
        if (width !== '') {
            customStyle.width = width;
        }
        if (height !== '') {
            customStyle.height = height;
        }
        customStyle.boxShadow = `0 ${Number(elevation) * 2}px ${Number(elevation) * 2}px 0 ${_THEME_COLORS.$darkgray}`;
        customStyle.borderRadius = `${Number(radius * 3)}px`;
        setCustomStyle({ ...customStyle });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width, height]);

    return (
        <div
            className={css + ' bg-hover-' + hoverColor}
            style={{ ...customStyle, ...props.style }}
            {...props}>
            {children}
        </div>
    )
}

export default Paper
