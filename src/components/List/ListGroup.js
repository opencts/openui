import React from 'react'
import Flex from '../Containers/Flex'
import Icon from '../Fonts/Icon'
import Divider from './Divider'

function ListGroup({
    title = '',
    titleColor = 'gray',
    separatorAfter = false, // true | false
    separatorSize = '1',
    separatorColor = 'light-gray',
    icon = '',
    children
}) {
    return (
        <div className="mt-2 mb-2">
            <div className="ml-2 mr-2">
                <h7 className={'text-' + titleColor}>
                    <Flex ai="center" gap={7}>
                        {icon !== '' && <Icon name={icon} />}
                        <span>{title}</span>
                    </Flex>
                </h7>
                <div className="ml-2 mt-3">
                    {children}
                </div>
            </div>
            {separatorAfter && <Divider size={separatorSize} color={separatorColor} />}
        </div>
    )
}

export default ListGroup
