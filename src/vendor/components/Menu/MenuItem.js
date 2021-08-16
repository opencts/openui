import React from 'react'
import { Link } from 'react-router-dom';
import Icon from '../Fonts/Icon';

function MenuItem({item}) {
    return (
        <>
            <Link to={item.path} className="sidebar-navlink">
                <div>
                    {item.iconName && <Icon name={item.iconName} />}
                    <span className="ml-2">{item.title}</span>
                </div>
            </Link>
        </>
    )
}

export default MenuItem
