import React from 'react'
import FloatingButton from '../../components/Forms/FloatingButton';
import '../assets/scss/_index.scss';
import '../assets/scss/_buttons.scss';

export default {
    title: 'General/FloatingButton',
    component: FloatingButton,
}

const Template = (args) => <FloatingButton {...args}>Primary</FloatingButton>


export const Default = Template.bind({})
Default.args = {
    color :'light',
    icon: 'question',
    size : '30',
    position : '',
    circled : true
}

export const Primary = Template.bind({})
Primary.args = {
    color : 'primary',
    icon: 'plus',
    size : '30',
    position : '',
    circled : true
}