import React from 'react'

function Badge({
    color = 'primary',
    vpos = 'bottom',
    children,
    ...props
}) {

    let css = 'badge bg-' + color;
    let customStyle = {};

    switch (vpos) {
        case 'top':
            customStyle.transform = 'translateY(-7px)';
            break;

        default:
            customStyle.transform = 'translateY(7px)';
            break;
    }

    return (
        <div className={css} style={{ ...customStyle, ...props.style }}>
            {children ? <div className="badge-child">
                {children}
            </div> : <div className="badge-single"></div>}
        </div>
    )
}

export default Badge
