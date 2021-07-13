import React from 'react'
import Font from '../../components/Fonts/Font'
import '../assets/scss/_index.scss';

export default {
    title: 'General/Font',
    component: Font
}

const Template = (args) => <Font {...args}>It's war</Font>

export const Default = Template.bind({})
Default.args = {
    color: '',
    background: '',
    size: 'regular',
    lineHeight: 2,
    weight: '',
    inline: false
}

export const Primary = Template.bind({})
Primary.args = {
    color: 'light',
    background: 'primary',
    size: 'regular',
    lineHeight: 2,
    weight: '',
    inline: false
}