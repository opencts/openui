import React from 'react'

function CarouselItem({
    img, 
    children,
    ...props
}) {
    return (
        <div {...props}>
            {children}
        </div>
    )
}

export default CarouselItem
