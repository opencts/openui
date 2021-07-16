import React, { useEffect, useState } from 'react'
import Flex from '../Containers/Flex';
import Icon from '../Fonts/Icon'
import Button from '../Forms/Button';
import Dialog from './Dialog'

function ConfirmAction({
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    onCancel = _ => { },
    onConfirm = _ => { }
}) {
    return <Flex ai="center" jc="center" gap={10}>
        <Button color="danger" outlined onClick={onCancel}>{cancelText}</Button>
        <Button onClick={onConfirm}>{confirmText}</Button>
    </Flex>
}

function Action({
    color, finishText, onFinish
}) {
    return <Flex ai="center" jc="center" gap={20}>
        <Button color={color} outlined onClick={onFinish}>{finishText}</Button>
    </Flex>
}

function MessageBox({
    type = 'confirm',
    message = 'Do you really want to do this action ?',
    onCancel = _ => { },
    onConfirm = _ => { },
    onFinish = _ => { },
    cancelText = 'Cancel',
    confirmText = 'Confirm',
    finishText = 'Finish'
}) {

    const [color, setColor] = useState('primary');
    const [icon, setIcon] = useState('question');
    const [title, setTitle] = useState('Confirm');
    const [titleIcon, setTitleIcon] = useState('Confirm');

    useEffect(() => {
        // eslint-disable-next-line default-case
        switch (type) {
            case 'confirm':
                setColor('primary');
                setTitleIcon('question');
                setTitle('Confirm');
                setIcon(null)
                break;
            case 'error':
                setColor('danger');
                setTitleIcon('timesCircle');
                setTitle('Error');
                setIcon('exclamationCircle')
                break;
            case 'success':
                setColor('success');
                setTitleIcon('checkSquare');
                setTitle('Success');
                setIcon('checkCircle')
                break;
        }
    }, [type]);

    return (
        <Dialog
            closable={false}
            title={title}
            titleIcon={titleIcon}
            color={color}
            actions={type === 'confirm' ? _ => <ConfirmAction
                cancelText={cancelText}
                confirmText={confirmText}
                onCancel={onCancel}
                onConfirm={onConfirm} /> : (
                    type === 'error' ? _ => <Action
                        color="danger"
                        finishText={finishText}
                        onFinish={onFinish} /> :
                        _ => <Action
                            color="success"
                            finishText={finishText}
                            onFinish={onFinish} />
                )}>
            <div className="pt-4 pl-4 pr-4">
                {icon &&
                    <Flex jc="center">
                        <Icon
                            style={{ fontSize: '3em' }}
                            name={icon}
                            color={color} />
                    </Flex>}
                <h5 className="text-center p-3">
                    {message}
                </h5>
            </div>
        </Dialog>
    )
}

export default MessageBox
