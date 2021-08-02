import React from 'react'
import Card from '../../components/Cards/Card';

export default {
    title: 'Cards/Card',
    component: Card
}

const Template = (args) => <Card {...args}></Card>

export const Default = Template.bind({})
Default.args = {
    avatar : '',
    title: '',
    subtitle: '',
    closable : false,
    action : () => { },
}