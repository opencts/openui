function Element({
    margin = '0',
    padding = '0',
    radius = '0',
    border = 'none',
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
    elevation = '0',
    elevationColor = '#999',
    children,
    ...props
}) {

    const trueWidth = (Number(width) >= 0 && Number(width) <= 1) ?
        Number(width) * 100 + '%' : width;

    const trueHeight = (Number(height) >= 0 && Number(height) <= 1) ?
        Number(height) * 100 + '%' : height;


    const customStyle = {
        borderRadius: radius,
        borderTop: bTop,
        borderRight: bRight,
        borderLeft: bLeft,
        borderBottom: bBottom,
        border,
        width: trueWidth,
        height: trueHeight,
        zIndex,
        top,
        left,
        bottom,
        right,
        boxShadow: `0 ${Number(elevation) * 2}px ${Number(elevation) * 2}px 0 ${elevationColor}`
    };

    if (bTop !== 'none' || bLeft !== 'none' || bRight !== 'none' || bBottom !== 'none') {
        delete customStyle.border;
    }

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
    css += ' ' + position;
    css += (props.className ? ' ' + props.className : '');
    css += ' fit-content'

    return <div className={css} style={{ ...customStyle, ...props.style }} {...props}>
        {children}
    </div>;
}

export default Element;
