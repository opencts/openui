import React from 'react'
import Button from '../../components/Forms/Button';
import '../assets/scss/_index.scss';

export default {
    title: 'General/Button',
    component: Button,
}

const Template = (args) => <Button {...args}>Primary</Button>


export const Default = Template.bind({})
Default.args = {
    color: 'light',
    rounded: false,
    outlined: false,
    flatted: true,
    raised: false,
    expand: false,
    icon: '',
    iconLeft: true,
    iconRight: false,
    loading: false
}

export const Primary = Template.bind({})
Primary.args = {
    color: 'primary',
    rounded: false,
    outlined: false,
    flatted: false,
    raised: false,
    expand: false,
    icon: '',
    iconLeft: true,
    iconRight: false,
    loading: false
}

export const Secondary = Template.bind({})
Secondary.args = {
    color: 'secondary',
    rounded: false,
    outlined: false,
    flatted: false,
    raised: false,
    expand: false,
    icon: '',
    iconLeft: true,
    iconRight: false,
    loading: false
}