import CardTitle from "./CardTitle";

function CardMedia({ image, title, style, className }) {
    return (
        <div className="card-media" style={{...style}}>
            <img src={image} />
        </div>
    )


}

export default CardMedia;