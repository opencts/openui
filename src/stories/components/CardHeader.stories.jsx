import React from 'react'
import CardHeader from '../../components/Cards/CardHeader';

export default {
    title: 'Cards/CardHeader',
    component: CardHeader
}

const Template = (args) => <CardHeader {...args}></CardHeader>

export const Default = Template.bind({})
Default.args = {
    avatar:'',
    title:'',
    subtitle:'',
    closable: false,
    handleCloose : () => {},
}