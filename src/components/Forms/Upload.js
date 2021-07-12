import React from 'react'
import Flex from '../Containers/Flex'
import Icon from '../Fonts/Icon'
import Button from './Button'

function Upload({
    label = 'Pick file',
    btnText = 'Browse',
    color = 'primary'
}) {
    return (
        <div>
            <div className={'upload border-' + color}>
                <Flex ai="center" jc="space-between">
                    <div className="ml-2">
                        <Flex ai="center" gap={10}>
                            <Icon color={color} name="cloudDownloadAlt" />
                            <div className={'text-' + color}>
                                {label}
                            </div>
                        </Flex>
                    </div>
                    <Button color={color}>{btnText}</Button>
                </Flex>
            </div>
        </div>
    )
}

export default Upload
