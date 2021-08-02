import { useEffect } from "react";
import { useState } from "react";

function Container({
    fluid = false,
    sm = '92',
    md = '82',
    lg = '72',
    children,
    ...props
}) {

    let css = 'container';
    const [customStyle, setCustomStyle] = useState({});

    if (fluid) css = 'container-fluid';

    useEffect(() => {
        function cb() {
            if (sm || md || lg) {
                setCustomStyle({ width: window.innerWidth < 601 ? sm : (window.innerWidth < 1001 ? md : lg) })
            }
        };


        window.addEventListener('resize', cb);
        return () => window.removeEventListener('resize', cb);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    css += props.className ? (' ' + props.className) : '';
    return (
        <div className={css} style={{ ...customStyle, ...props.style }} {...props}>
            {children}
        </div>
    )
}

export default Container
