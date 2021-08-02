import React from 'react'
import Switch from '../../components/Forms/Switch'
import '../assets/scss/_index.scss';

export default {
    title: 'Forms/Switch',
    component: Switch
}

const Template = (args) => <Switch {...args}/>

export const Default = Template.bind({})
Default.args = {
    color : 'primary',
    checked : false,
    onChange : () => { }
}