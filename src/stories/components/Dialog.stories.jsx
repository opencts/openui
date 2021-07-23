import React from 'react'
import Dialog from '../../components/Dialogs/Dialog';
import '../assets/scss/_index.scss';
import '../assets/scss/_dialogs.scss';

export default {
    title: 'Dialogs/Dialog',
    component: Dialog
}

const Template = (args) => <Dialog {...args}>Story Button</Dialog>

export const Default = Template.bind({})
Default.args = {
    color : 'primary',
    titleIcon : 'info',
    titleIconColor : 'light',
    title : '',
    actionIcon : 'windowClose',
    actionIconColor : 'light',
}