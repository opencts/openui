import React from 'react'

function Divider({
    size = '1',
    color = 'light-gray'
}) {
    return (
        <div className={'mt-2 mb-2 bg-' + color} style={{ height: size + 'px' }}/>
    )
}

export default Divider
