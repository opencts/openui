import React from 'react';
import Breadcrumbs from '../../components/List/Breadcrumbs';

export default {
    title: 'List/BreadCrumbs',
    component: Breadcrumbs
}

const Template = (args) => <Breadcrumbs {...args}></Breadcrumbs>

export const Default = Template.bind({});

Default.args = {
    separator: '/',
    color: 'primary'
}

