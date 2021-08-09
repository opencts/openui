import CardHeader from "./CardHeader";
import { useState } from "react";

function Card({
    avatar, 
    title, 
    subtitle, 
    closable = false,
     action = () => { }, 
     style, 
     children, 
     classeName = ''
}) {

    const [cloose, setCloose] = useState(false)

    function handleCloose() {
        setCloose(true)
    }

    if (!cloose) {
        return (
            <div className={`card ${classeName}`} style={{ ...style }}>
                {
                    (avatar || title || subtitle || closable) ?
                        <CardHeader avatar={avatar} title={title} subtitle={subtitle} closable={closable} handleCloose={handleCloose} />
                        : ''
                }
                {children}
            </div>
        )
    }

    return ''


}


export default Card;
