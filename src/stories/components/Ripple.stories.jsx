import React from 'react'
import Ripple from '../../components/Ripple';
import '../assets/scss/_index.scss';

export default {
    title: 'General/Ripple',
    component: Ripple
}

const Template = (args) => <Ripple {...args}>
    <button>Click me</button>
</Ripple>

export const Default = Template.bind({})
Default.args = {
    fromCenter: false
}
