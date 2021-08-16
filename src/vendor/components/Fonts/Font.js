import React from 'react'

function Font({
    color = null,
    background = null,
    size = 'lv5',
    lineHeight = 2,
    weight = null,
    inline = false,
    children,
    ...props
}) {

    // Get default color and background's classes
    const trueColor = !color ? '' : 'text-' + color;
    const trueBg = !background ? '' : 'bg-' + background;

    // Global custom style
    let customStyle = {};

    // Compute size class depends on kind of size value
    const getSize = () => {
        let result = '';
        if (size === 'regular') result += 'h0';
        if (/^(lv)[1-5]$/.test(size.trim())) result = size.replace('lv', 'h');
        return result;
    };

    const trueSize = getSize();
    if (trueSize === '') customStyle.fontSize = size;

    // Font weight handling
    const trueWeight = !weight ? 'regular' : weight;
    const resMatch = trueWeight.match(/[1-9][0-9]{2}/);
    if (resMatch && resMatch !== 0) customStyle.fontWeight = resMatch[0];

    // Handling line-height
    customStyle.lineHeight = lineHeight;

    // Generating final css classes
    let css = trueBg + (color ? (' ' + trueColor) : '');
    css += ' ' + trueSize;
    css += ' ' + trueWeight;
    css += ' ' + props.className;

    // Generating final styles
    customStyle = { ...customStyle, ...props.style };

    if (inline) return (
        <span className={css} style={customStyle} {...props}>
            {children}
        </span>
    )

    return (
        <div className={css} style={customStyle} {...props}>
            {children}
        </div>
    )
}

export default Font
