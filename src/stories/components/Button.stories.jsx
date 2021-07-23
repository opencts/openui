import React from 'react'
import Button from '../../components/Forms/Button';
import '../assets/scss/_index.scss';
import '../assets/scss/_buttons.scss';

export default {
    title: 'Forms/Button',
    component: Button
}

const Template = (args) => <Button {...args}>Story Button</Button>

export const Default = Template.bind({})
Default.args = {
    color: 'primary',
    rounded: false,
    outlined: false,
    flatted: false,
    raised: true,
    expand: false,
    icon: '',
    iconLeft: true,
    iconRight: false,
    loading: false,
}