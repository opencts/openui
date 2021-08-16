import { useState } from "react";
import _THEME_COLORS, { reverseColor } from "../../services/_colors";
import Icon from "../Fonts/Icon";
import Button from "../Forms/Button";

const NavBar = ({
    color = "primary",
    className = '',
    height = '80px',
    fontSize = '1.2rem',
    appIconSize = '1.6rem',
    logoSize = '1.8rem',
    menuItems = [],
    ...props
}) => {

    const [displayMenu, setDisplayMenu] = useState(false)

    const trueColor = _THEME_COLORS[`$${color}`];
    let css = {
        backgroundColor: trueColor,
        border: `1px solid ${trueColor}`,
        height
    };
    let trueClassName = className + ` text-${reverseColor(trueColor)}`

    return (
        <nav className={'navbar ' + trueClassName} style={{ boxShadow: `0px 2px 5px 0px ${trueColor}`, ...css, ...props.style }}>
            <div className="navbar-logo" style={{ fontSize: logoSize }}>
                React <Icon name="react" className="app-icon" style={{ fontSize: appIconSize }} />
            </div>
            <div className="menu-icon" onClick={() => { !displayMenu ? setDisplayMenu(true) : setDisplayMenu(false) }}>
                {displayMenu ? <Icon name="times" /> : <Icon name="bars" />}
            </div>
            <ul className={!displayMenu ? "navbar-menu" : "navbar-menu active"} style={{ backgroundColor: trueColor }}>
                {menuItems.map((item, index) => {
                    return <li key={index} className={item.cName} href={item.href} style={{ fontSize }}>
                        {item.title}
                    </li>
                })}
            </ul>
            <Button icon="signInAlt" iconRight color={color} className="sign-in-btn">Sign In</Button>
        </nav>
    )
}

export default NavBar;