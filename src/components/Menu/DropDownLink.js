import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Fonts/Icon'

function DropDownLink({item}) {
    return (
        <Link className='dropdown-link' to={item.path}>
            {item.iconName && <Icon name={item.iconName} className="mr-2"/>}
            {item.title}
        </Link>
    )
}

export default DropDownLink
