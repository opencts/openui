import React from 'react'
import Flex from '../Containers/Flex'

function Card({
    color = 'light', // 
    padding = 0, // 0 - 5
    children,
}) {

    const css = `t p-${padding} bg-${color}`;
    console.log(css)

    return (
        <div className={css}>
            <Flex jc="center" ai="center">
                {children}
            </Flex>
        </div>
    )
}

export default Card
