import { useState } from "react";
import Icon from "../Fonts/Icon";

function makeStyle(type, color) {
    let style = { icone: '', container: '', content: '' }
    let iconeName = ''
    if (color === 'info') iconeName = 'infoCircle';
    if (color === 'success') iconeName = 'checkCircle';
    if (color === 'danger') iconeName = 'timesCircle';
    if (color === 'warning') iconeName = 'exclamationTriangle';
    style.icone = iconeName;
    style.container = `alert-${type}-${color}`
    style.content = `alert-content-${type}-${color}`

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


    let { icone, container, content } = makeStyle(type, color)
    let postitionStyle = { ...style }
    const [display, setDisplay] = useState(true)

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
                <div className={content}>
                    <span><Icon name={icone} /></span>
                    <span className="alert-message">{children}</span>
                    {closable && <span className='alert-close' onClick={handleCloseAlert}> <Icon name="times" /> </span>}
                </div>
            </div>
        )
    } else {
        return ''
    }

}

export default Alert;