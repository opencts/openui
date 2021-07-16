import React from 'react'
import Alert from '../../components/Dialogs/Alert';
import '../assets/scss/_index.scss';
import '../assets/scss/_alerts.scss';

export default {
    title: 'Dialogs/Alert',
    component: Alert
}

const Template = (args) => <Alert {...args}>Story Button</Alert>

export const Default = Template.bind({})
Default.args = {
    color:  'info',
    type : 'dense',
    open : false,
    duration : 500000,
    fixed : false,
    vpos : 'top',
    hpos : 'center',
    closable : false,
}