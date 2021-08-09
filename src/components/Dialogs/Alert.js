import { useState } from "react";
import Icon from "../Fonts/Icon";

const ICON_COLORS = {
    'info': 'primary',
    'success': 'success',
    'warning': 'secondary',
    'danger': 'danger'
}


function makeStyle(type, color) {
    let style = { icon: '', container: '' }
    let iconName = ''
    if (color === 'info') iconName = 'infoCircle';
    if (color === 'success') iconName = 'checkCircle';
    if (color === 'danger') iconName = 'timesCircle';
    if (color === 'warning') iconName = 'exclamationTriangle';
    style.icon = iconName;
    style.container = `alert-${type}-${color}`

    return style;
}


function Alert({
    color = 'info',
    type = 'dense',
    open = false,
    duration = 500000,
    fixed = false,
    vpos = 'top',
    hpos = 'center',
    closable = false,
    classeName,
    style,
    children

}) {


    let { icon, container } = makeStyle(type, color)
    let contentClasseName = classeName + ' alert-content'
    contentClasseName = type === 'outline' ? contentClasseName + ' alert-content-outline' : contentClasseName;
    let postitionStyle = { ...style }

    const [display, setDisplay] = useState(true)

    //get icon color from a type
    const trueIconColor = type === 'dense' ? 'white' : ICON_COLORS[color];
    const messageClasseName = `alert-message text-${trueIconColor}`;

    if (fixed) {
        postitionStyle.width = 'inherit'
        postitionStyle.position = 'fixed'
        postitionStyle[vpos] = '0px'

        if (hpos === 'center') {
            postitionStyle.top = '50%';
        } else if (hpos === 'left' || hpos === 'right') {
            postitionStyle[hpos] = '0px'
        }

    }

    setTimeout(() => {
        setDisplay(false)
    }, duration)


    function handleCloseAlert(e) {
        setDisplay(false)
    }



    if (display) {
        return (
            <div className={container} style={{ ...postitionStyle }}>
                <div className={contentClasseName}>
                    <span><Icon color={trueIconColor} name={icon} /></span>
                    <span className={messageClasseName} >{children}</span>
                    {closable && <span className='alert-close' onClick={handleCloseAlert}> <Icon name="times" color={trueIconColor} /> </span>}
                </div>
            </div>
        )
    } else {
        return ''
    }

}

export default Alert;