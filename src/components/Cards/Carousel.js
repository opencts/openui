import React, { Children, useCallback, useEffect, useState } from 'react'
import Icon from '../Fonts/Icon';

function Carousel({
    controls = true,
    dots = true,
    width = '100%',
    height = '50vh',
    dotSize = 10,
    delay = 5,
    children,
    ...props
}) {

    const [customStyle, setCustomStyle] = useState({ ...props.style });
    const [items, setItems] = useState([]);
    const [current, setCurrent] = useState([]);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const it = [];
        let i = 0;
        Children.map(children, child => {
            if (child.props.img && child.props.children) {
                const item = {
                    background: child.props.img,
                    content: child.props.children,
                    current: false,
                    index: i++
                }
                it.push(item);
            }
        });
        it[0].current = true;
        setItems(it);
        setCurrent(it[0]);
    }, [children]);

    useEffect(() => {
        setCustomStyle(customStyle => ({
            ...customStyle,
            backgroundImage: `url(${current.background})`,
        }));
    }, [current]);

    const move = useCallback((direction) => {
        setVisible(false);
        setTimeout(() => {
            setVisible(true);
            if (typeof direction === 'number') {
                setCurrent(items[direction]);
            } else {
                if (direction === 'left') {
                    if (current.index === 0) {
                        setCurrent(items[items.length - 1]);
                    } else {
                        setCurrent(items[current.index - 1]);
                    }
                } else {
                    if (current.index === items.length - 1) {
                        setCurrent(items[0]);
                    } else {
                        setCurrent(items[current.index + 1]);
                    }
                }
            }
        }, 10);
    }, [current, items]);

    useEffect(() => {
        const interval = setInterval(() => {
            move('right');
        }, Number(delay) * 1000);
        return _ => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, move]);

    if (!visible) return null;

    return (
        <div className="bg-dark">
            <div className="carousel" style={{ ...customStyle, width, height, ...props.style }}>
                <div className="control" onClick={_ => move('left')}>
                    <Icon name="angleLeft" />
                </div>
                <div className="text-light carousel-content">
                    {current.content}
                </div>
                <div className="control" onClick={_ => move('right')}>
                    <Icon name="angleRight" />
                </div>
                {dots && <div className="carousel-dots">
                    {items.map((item, index) => <div
                        key={index}
                        className={current.index === index ? 'carousel-dot-active' : 'carousel-dot'}
                        style={{
                            width: dotSize + 'px',
                            height: dotSize + 'px'
                        }}
                        onClick={_ => move(index)}></div>)}
                </div>}
            </div>
        </div>
    )
}

export default Carousel
