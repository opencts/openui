function CardSubTitle({subtitle, style, classeName = ''}) { 
    return <span style={{...style}} className={classeName}>{subtitle}</span>

}

export default CardSubTitle;