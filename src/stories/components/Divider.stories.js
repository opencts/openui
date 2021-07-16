import React from 'react';
import Divider from '../../components/List/Divider';

export default {
    title: 'List/Divider',
    component: Divider
}

const Template = (args) => <Divider {...args}></Divider>

export const Default = Template.bind({});

Default.args = {
    size: '1',
    color: 'light-gray'
}

