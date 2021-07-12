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
    icon,
    children,
    iconLeft = true,
    iconRight = false,
    loading = false,
    ...props
}) {

    let css = 'btn bg-' + color;
    if (raised) {
        css += ' raised';
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

    if (raised) {
        return (
            <Ripple raised>
                <button className={css} {...props}>
                    <Flex jc="space-between" ai="center">
                        {icon && iconLeft && <Icon name={icon} className="icon-left" />}
                        {children}
                        {icon && iconRight && <Icon name={icon} className="icon-right" />}
                    </Flex>
                </button>
            </Ripple>
        )
    }

    if (loading) {
        return <button className={css} {...props}>
            <Flex jc="space-between" ai="center">
                 <Icon color={outlined ? color: 'light'} name="spinner" className="spin icon-left" />
                {children}
            </Flex>
        </button>
    }

    return (
        <Ripple>
            <button className={css} {...props}>
                <Flex jc="space-between" ai="center">
                    {icon && iconLeft && <Icon color={outlined ? color: 'light'} name={icon} className="icon-left" />}
                    {children}
                    {icon && iconRight && <Icon color={outlined ? color: 'light'} name={icon} className="icon-right" />}
                </Flex>
            </button>
        </Ripple>
    )
}

export default Button
