import React from 'react'
import Radio from '../../components/Forms/Radio'
import '../assets/scss/_index.scss';

export default {
    title: 'Forms/Radio',
    component: Radio
}

const Template = (args) => <Radio {...args}/>

export const Default = Template.bind({})
Default.args = {
    color: 'primary',
    onChange : _ => {},
    size : 10,
    checked : false
}