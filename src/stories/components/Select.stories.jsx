import React from 'react';
import Select from '../../components/Forms/Select';
import '../assets/scss/_index.scss';

export default {
    title: 'Forms/Select',
    component: Select
}

const Template = (args) => <Select {...args} />

export const Default = Template.bind({});

Default.args = {
    label: 'Select',
    color: 'primary',
    searcheable: true,
    data: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
        { id: 3, name: 'Foo bar' },
    ],
    onChange: _ => { },
    valueId: 'id',
    valueLabel: 'name',
    multiple: false,
}