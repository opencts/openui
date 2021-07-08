import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Grid({
    sm = '1',
    md = '2',
    lg = '4',
    rowGap = null,
    colGap = null,
    gap = null,
    align,
    children,
    ...props
}) {

    const [css, setCss] = useState('grid');
    const customStyle = {
        gap: (!gap && !rowGap && !colGap) ? '10px' : (
            gap ? `${gap}px` : `${rowGap}px ${colGap}px`
        )
    };

    useEffect(() => {
        function cb() {
            const winWidth = window.innerWidth;
            if (winWidth < 601) {
                setCss('grid grid-cols-' + sm);
            } else if (winWidth < 1001) {
                setCss('grid grid-cols-' + md);
            } else {
                setCss('grid grid-cols-' + lg);
            }
        };
        cb();

        window.addEventListener('resize', cb);
        return () => window.removeEventListener('resize', cb);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sm, md, lg]);


    return (
        <div className={css} style={{ ...customStyle, ...props.style }} {...props}>
            {children}
        </div>
    )
}

export default Grid
