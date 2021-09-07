import React from "react";
function CardTitle({title, style, classeName}) { 
    return <h4 style={{...style}} className={classeName}>{title}</h4>

}

export default CardTitle;