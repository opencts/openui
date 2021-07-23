import React from 'react';
import Avatar from '../../components/Tips/Avatar';
import '../assets/scss/_index.scss';
import '../assets/scss/_tips.scss';

export default {
    title: 'Tips/Avatar',
    component: Avatar
}

const Template = (args) => <Avatar {...args} />

export const Default = Template.bind({});

Default.args = {
    color: 'primary',
    img: '',
    size: 40,
    letter: '',
}