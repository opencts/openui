import React from 'react'

function TabItem({
    title,
    icon,
    children,
    ...props
}) {
    return (
        <div>
            {children}
        </div>
    )
}

export default TabItem
