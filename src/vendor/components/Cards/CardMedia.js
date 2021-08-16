import React from "react";
function CardMedia({ image, style, ...props }) {
    return (
        <div className="card-media" style={{...style}} {...props} >
            <img src={image} alt="card-media" />
        </div>
    )


}

export default CardMedia;