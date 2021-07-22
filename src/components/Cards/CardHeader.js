import Icon from "../Fonts/Icon";
import CardAvatar from "./CardAvatar";
import CardSubTitle from "./CardSubTitle";
import CardTitle from "./CardTitle";

function CardHeader({
    avatar, title, subtitle, closable, handleCloose, style, classeName
}) {

    return <div className={"card-header "+classeName} style={{...style}}>
       {avatar && <CardAvatar avatar={avatar}/>}
        <div className="card-title">
            { title && <CardTitle title={title}/>}
            { subtitle && <CardSubTitle subtitle={subtitle}/>}
        </div>
        {closable && <div className="card-closable" onClick={handleCloose}>
            <Icon name="times" color="danger" />
        </div>}
    </div>

}

export default CardHeader;