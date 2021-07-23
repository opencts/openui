import React from 'react'
import Transition from '../Animations/Transition'
import Flex from '../Containers/Flex'
import Icon from '../Fonts/Icon'

function Dialog({
    color = 'primary',
    titleIcon = 'info',
    titleIconColor = 'light',
    title = '',
    closable = true,
    children,
    onClose = _ => { },
    actions = null
}) {
    return (
        <div className="dialog">
            <Transition name="slide-down">
                <div className="dialog-content">
                    <div className={'dialog-header bg-' + color}>
                        <Flex ai="center" jc="space-between" gap={5}>
                            <Flex ai="center" gap={10}>
                                <Icon name={titleIcon} color={titleIconColor} />
                                <h5>
                                    {title}
                                </h5>
                            </Flex>
                            {closable && <Icon name="windowClose" onClick={onClose} />}
                        </Flex>
                    </div>
                    <div className="dialog-subcontent">
                        {children}
                    </div>
                    {actions && <div className="dialog-actions p-2">
                        {actions()}
                    </div>}
                </div>
            </Transition>
        </div>
    )
}

export default Dialog
