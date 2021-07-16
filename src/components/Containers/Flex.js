import React from 'react'

function Flex({
    jc = null,
    ai = null,
    children,
    direction = 'row',
    autoScroll = false,
    gap = 0,
    ...props
}) {

    const css = 'flex' + (autoScroll ? '-auto' : '') + (jc ? (' f-jc-' + jc) : '') + (ai ? (' f-ai-' + ai) : '') + ' f-' + direction;

    return (
        <div className={css + (props.className ? (' ' + props.className) : '')} style={{
            gap: `0px ${gap}px`,
            ...props.style
        }} {...props}>
            {children}
        </div>
    )
}

export default Flex
