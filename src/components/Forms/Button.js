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

    if (expand) {
        style.width = '100%';

        if (raised) {
            return (
                <Ripple raised expand>
                    <button className={css} {...props} style={style}>
                        <Flex jc="center" ai="center" gap={10}>
                            {icon && iconLeft && <Icon name={icon} className="icon-left" />}
                            {children}
                            {icon && iconRight && <Icon name={icon} className="icon-right" />}
                        </Flex>
                    </button>
                </Ripple>
            )
        }

        if (loading) {
            return <button className={css} {...props} style={style}>
                <Flex jc="center" ai="center" gap={10}>
                    <Icon color={outlined ? color : 'light'} name="spinner" className="spin icon-left" />
                    {children}
                </Flex>
            </button>
        }

        return (
            <Ripple expand>
                <button className={css} {...props} style={style}>
                    <Flex jc="center" ai="center" gap={5}>
                        {icon && iconLeft && <Icon color={outlined ? color : 'light'} name={icon} className="icon-left" />}
                        {children}
                        {icon && iconRight && <Icon color={outlined ? color : 'light'} name={icon} className="icon-right" />}
                    </Flex>
                </button>
            </Ripple>
        )
    }

    if (raised) {
        return (
            <Ripple raised>
                <button className={css} {...props}>
                    <Flex jc="center" ai="center" gap={10}>
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
            <Flex jc="center" ai="center" gap={10}>
                <Icon color={outlined ? color : 'light'} name="spinner" className="spin icon-left" />
                {children}
            </Flex>
        </button>
    }

    return (
        <Ripple>
            <button className={css} {...props}>
                <Flex jc="center" ai="center" gap={5}>
                    {icon && iconLeft && <Icon color={outlined ? color : 'light'} name={icon} className="icon-left" />}
                    {children}
                    {icon && iconRight && <Icon color={outlined ? color : 'light'} name={icon} className="icon-right" />}
                </Flex>
            </button>
        </Ripple>
    )
}

export default Button
