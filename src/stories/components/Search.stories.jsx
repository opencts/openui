import React from 'react';
import Search from '../../components/Forms/Search';

export default {
    title: 'Forms/Search',
    component: Search
}

const Template = (args) => <Search {...args} />

export const Default = Template.bind({});

Default.args = {
    color: 'primary',
    onSearch: () => { }
}