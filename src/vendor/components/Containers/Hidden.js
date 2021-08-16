import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function Hidden({
    up = null,
    down = null,
    children,
    ...props
}) {

    if (!up && !down) up = '1000px';
    if (['sm', 'md', 'lg'].includes(up)) up = up === 'sm' ? '0px' : ('md' ? '600px' : '1000px');
    if (['sm', 'md', 'lg'].includes(down)) down = down === 'sm' ? '600px' : '1000px';


    const [visible, setVisible] = useState(
        up ? window.innerWidth > Number(up.split('px')[0]) : window.innerWidth < Number(down.split('px')[0])
    );

    useEffect(() => {
        function cb() {
            setVisible(up ? window.innerWidth > Number(up.split('px')[0]) : window.innerWidth < Number(down.split('px')[0]));
        };

        window.addEventListener('resize', cb);
        return () => window.removeEventListener('resize', cb);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!visible) return null;

    return (
        <div style={props.style} className={props.className} {...props}>
            {children}
        </div>
    )
}

export default Hidden
