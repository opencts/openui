import { Children } from 'react'
import { cloneElement } from 'react';

function Border({
    margin = '0',
    padding = '0',
    radius = '0',
    type = 'none',
    bTop = 'none',
    bRight = 'none',
    bBottom = 'none',
    bLeft = 'none',
    width = 'auto',
    height = 'auto',
    position = 'static',
    zIndex = '0',
    top = 'auto',
    left = 'auto',
    bottom = 'auto', 
    right = 'auto',
    children,
    ...props
}) {

    const trueWidth = (Number(width) >= 0 && Number(width) <= 1) ?
        Number(width) * 100 + '%' : width;

    const trueHeight = (Number(height) >= 0 && Number(height) <= 1) ?
        Number(height) * 100 + '%' : height;

    console.log(type);

    const customStyle = {
        borderRadius: radius,
        borderTop: top,
        borderRight: right,
        borderLeft: left,
        borderBottom: bottom,
        border: type,
        width: trueWidth,
        height: trueHeight,
        zIndex,
        top,
        left,
        bottom,
        right
    };

    if (top !== 'none' || left !== 'none' || right !== 'none' || bottom !== 'none') {
        delete customStyle.border;
    }

    console.log(customStyle)

    const handleMargin = (marginValue, prefix) => {
        let trueMargin = '';
        if (marginValue.indexOf('px') !== -1) {
            customStyle[prefix === 'm' ? 'margin' : 'padding'] = marginValue;
        } else {
            const margins = marginValue.split(' ');
            switch (margins.length) {
                case 1: trueMargin = prefix + '-' + marginValue; break;
                case 2: trueMargin = `${prefix}t-${margins[0]} ${prefix}r-${margins[1]} ${prefix}b-${margins[0]} ${prefix}l-${margins[1]}`; break;
                case 4: trueMargin = `${prefix}t-${margins[0]} ${prefix}r-${margins[1]} ${prefix}b-${margins[2]} ${prefix}l-${margins[4]}`; break;
                default:
                    trueMargin = prefix + '-0';
            }
        }
        return trueMargin;
    }

    let css = '';
    css += handleMargin(margin, 'm');
    css += ' ' + handleMargin(padding, 'p');
    css += ' ' + props.className;
    css += ' .' + position;

    const newChildren = Children.map(children, child => cloneElement(child, {
        className: css,
        style: { ...customStyle, ...props.style },
        ...props
    }));

    console.log({ ...customStyle, ...props.style })

    return newChildren;
}

export default Border;
