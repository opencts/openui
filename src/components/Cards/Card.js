import CardHeader from "./CardHeader";
import CardAvatar from './CardAvatar';
import CardSubTitle from "./CardSubTitle";
import CardTitle from "./CardTitle";
import CardAction from "./CardAction";
import CardContent from "./CardContent";
import Icon from "../Fonts/Icon";
import Button from "../Forms/Button";
import { useState } from "react";

function Card({
    avatar, title, subtitle, closable = false, action = () => { }, style, children, classeName = ''
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