import React from 'react'
import '../assets/scss/_index.scss';
import '../assets/scss/_alerts.scss';
import Transition from '../../components/Animations/Transition';

export default {
    title: 'Forms/Transition',
    component: Transition
}

const Template = (args) => <Transition {...args}>Story Button</Transition>

export const Default = Template.bind({})
Default.args = {
    name: 'fade-in',
    duration: '0.5',
    timingFunction: 'ease-in-out',
    delay: '0',
    count: '1',
    direction: 'alternate',
    fillMode: 'none'
}