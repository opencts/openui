import { useState } from "react";
import _THEME_COLORS, { reverseColor } from "../../services/_colors";
import Icon from "../Fonts/Icon";
import Button from "../Forms/Button";
import FloatingButton from "../Forms/FloatingButton";

const menuItems = [
    {
        title : 'Home',
        href: '#',
        cName: 'nav-link'

    },
    {
        title : 'Accueil',
        href: '#',
        cName: 'nav-link'

    },
    {
        title : 'Nos Actions',
        href: '#',
        cName: 'nav-link'

    },
    {
        title : 'Nos Partenaires',
        href: '#',
        cName: 'nav-link'

    },
    {
        title : 'Mediatheque',
        href: '#',
        cName: 'nav-link'

    },
    {
        title : 'Sign In',
        href: '#',
        cName: 'nav-link nav-link-mobile'

    }
]

export default function({color="primary", className = '',...props}){

    const [displayMenu, setDisplayMenu] = useState(false)

    const trueColor =  _THEME_COLORS[`$${color}`];
    let css = {backgroundColor: trueColor, border: `1px solid ${trueColor}`};
    let trueClassName = className + ` text-${reverseColor(trueColor)}`

    console.log(css)

    return (
        <nav className={'navbar '+trueClassName}  style={{boxShadow:`0px 2px 5px 0px ${trueColor}`,...css,...props.style}}>
                <a className="navbar-logo">
                    React <Icon name="react" className="app-icon"/>
                </a>
                <div className="menu-icon" onClick={()=> { !displayMenu ? setDisplayMenu(true): setDisplayMenu(false)}}>
                    {displayMenu ? <Icon name="times"/> : <Icon name="bars"/>}
                </div>
                <ul className={!displayMenu ? "navbar-menu": "navbar-menu active"} style={{backgroundColor: trueColor}}>
                    {menuItems.map( (item, index) => {
                        return <li key={index} className={item.cName} href={item.href}> {item.title} </li>
                    })}
                </ul>
                <Button  icon="signInAlt" iconRight color={color} className="sign-in-btn">Sign In</Button>
        </nav>
    )
}