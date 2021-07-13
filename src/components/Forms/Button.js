import React from 'react'
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';
import Ripple from '../Animations/Ripple';

function Button({
    color = 'primary',
    rounded,
    outlined,
    flatted,
    raised,
    expand,
    icon,
    children,
    iconLeft = true,
    iconRight = false,
    loading = false,
    ...props
}) {

    let css = 'btn bg-' + color;
    let style = { ...props.style };
    let rippleAttrs = {
        raised: false,
        expand: false
    };
    if (raised) {
        css += ' raised';
        rippleAttrs.raised = true;
    }

    if (iconRight) iconLeft = false;

    if (rounded) {
        css += ' rounded';
    }

    if (flatted) {
        css += ' flatted';
    } else {
        css += ' normal';
    }

    if (outlined) {
        css += ' bg-' + color + '-outlined';
    }

    if (expand) {
        style.width = '100%';
        rippleAttrs.expand = true;
    }

    return (
        <Ripple {...rippleAttrs}>
            <button className={css} {...props} style={{ ...props.style, ...style }}>
                <Flex jc="center" ai="center" gap={10}>
                    {icon && iconLeft && <Icon color={outlined ? color : null} name={icon} className="icon-left" />}
                    {loading && <Icon color={outlined ? color : null} name="spinner" className="spin icon-left" />}
                    {children}
                    {icon && iconRight && <Icon color={outlined ? color : null} name={icon} className="icon-right" />}
                </Flex>
            </button>
        </Ripple>
    )
}

export default Button
