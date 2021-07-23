import React from 'react'

function Transition({
    name = 'fade-in',
    duration = '1',
    timingFunction = 'ease',
    delay = '0',
    count = '1',
    direction = 'alternate',
    fillMode = 'none',
    children,
    ...props
}) {

    const customStyle = {
        animationDuration: duration + 's',
        animationTimingFunction: timingFunction,
        animationDelay: delay,
        animationIterationCount: count,
        animationDirection: direction,
        animationFillMode: fillMode
    };

    return (
        <div className={name} style={{...customStyle, ...props.style}} {...props }>
            { children }
        </div >
    )
}

export default Transition
