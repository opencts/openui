import React, { useEffect, useState } from 'react'

function Flex({
    jc = 'flex-start',
    ai = 'flex-start',
    children,
    direction = 'row',
    autoScroll = false,
    wrap = false,
    gap = 0,
    ...props
}) {

    const [css, setCss] = useState();

    useEffect(() => {
        let c = 'flex' + (autoScroll ? '-auto' : '') + (jc ? (' f-jc-' + jc) : '') + (ai ? (' f-ai-' + ai) : '') + ' f-' + direction;
        c += wrap ? ' flex-wrap' : '';
        c = c + (props.className ? (' ' + props.className) : '');
        setCss(c);
    }, [jc, ai, direction, autoScroll, props]);


    return (
        <div className={css} style={{
            gap: `${wrap ? gap : 0}px ${gap}px`,
            ...props.style
        }} {...props}>
            {children}
        </div>
    )
}

export default Flex
