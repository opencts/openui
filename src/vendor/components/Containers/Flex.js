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
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let c = 'flex' + (autoScroll ? '-auto' : '') + (jc ? (' f-jc-' + jc) : '') + (ai ? (' f-ai-' + ai) : '') + ' f-' + direction;
        c += wrap ? ' flex-wrap' : '';
        c = c + (props.className ? (' ' + props.className) : '');
        setCss(c);
        setLoading(false);
    }, [jc, ai, direction, autoScroll, props, wrap]);

    if (loading) return null;

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
