import React from 'react'

function Flex({
    jc = null,
    ai = null,
    children,
    ...props
}) {

    const css = 'flex' + (jc ? (' f-jc-' + jc) : '') + (ai ? (' f-ai-' + ai) : ''); 

    return (
        <div className={css + (props.className ? (' ' + props.className): '')} {...props}>
            {children}
        </div>
    )
}

export default Flex
