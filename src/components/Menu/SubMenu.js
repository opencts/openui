import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Fonts/Icon';
import DropDownLink from './DropDownLink';

function SubMenu({ item }) {

    const icon = "angleUp";
    const negativeIcon = "angleDown";

    const [openSubNav, setopenSubNav] = useState(false);
    const showSubNav = _ => setopenSubNav(!openSubNav);
    return (
        <>
            <Link to={item.subNav ? '#' : item.path} className="sidebar-navlink" onClick={item.subNav && showSubNav}>
                <div>
                    <Icon name={item.iconName} />
                    <span className="ml-2">{item.title}</span>
                </div>
                <div>
                    {item.subNav && !openSubNav ? <Icon name={negativeIcon} />
                        : openSubNav ? <Icon name={icon} /> : null
                    }
                </div>
            </Link>
            {openSubNav && item.subNav.map((el, index) => {
               return  <DropDownLink item={el} key={index} />
            })}
        </>
    )
}

export default SubMenu
