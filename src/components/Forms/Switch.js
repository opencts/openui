import React, {useState} from 'react'

function Switch({
    color = 'primary',
    toSwitch = false,
}) {

    const [switched, setSwitched] = useState(false)

    function handleChange() {
        setSwitched(!switched)
        console.log(switched)
        if (switched) {
            window.document.getElementsByClassName('switch')[0].style.left = '50%'
        }
        else
        {
            window.document.getElementsByClassName('switch')[0].style.left = '0%'
        }
        
    }

    let css = switched ? 'bg-dark-gray' : 'bg-'+color

    return (
        <div onClick={handleChange} className={'switch-bar ' + css}>
            <div className='switch'>
                
            </div>
        </div>
    )
}

export default Switch
