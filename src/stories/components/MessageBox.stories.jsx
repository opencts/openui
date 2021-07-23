import React from 'react';
import MessageBox from '../../components/Dialogs/MessageBox';
import '../assets/scss/_index.scss';

export default {
    title: 'Dialogs/MessageBox',
    component: MessageBox
}

const Template = (args) => <MessageBox {...args}></MessageBox>

export const Default = Template.bind({});

Default.args = {
    type: 'confirm',
    message: 'Do you really want to do this action ?',
    onCancel: _ => { },
    onConfirm: _ => { },
    onFinish: _ => { },
    cancelText: 'Cancel',
    confirmText: 'Confirm',
    finishText: 'Finish'
}