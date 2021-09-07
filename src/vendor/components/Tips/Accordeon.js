import React, { useState } from 'react'
import Transition from '../Animations/Transition';
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon';

function Accordeon({
    title = _ => {},
    padding = '2', // 1-5
    icon = '',
    negativeIcon = '',
    children
}) {

    const [visible, setVisible] = useState(false);

    function toogleAccordeon() {
        setVisible(!visible);
    }

    return (
        <div onClick={toogleAccordeon}>
            <div className={`p-${padding}`}>
                <Flex ai="center" jc="space-between">
                    <div>{typeof title === 'function' ? title() : title}</div>
                    {icon !== '' && <div>
                        {visible ? (negativeIcon ? <Icon name={negativeIcon} />
                            : <Icon name={icon} />)
                            : <Icon name={icon} />}
                    </div>}
                </Flex>
            </div>
            {visible && <div onClick={e => e.stopPropagation()}>
                <div className="pl-3">
                    <Transition style={{ width: '100%' }}>
                        {children}
                    </Transition>
                </div>
            </div>}
        </div>
    )
}

export default Accordeon
