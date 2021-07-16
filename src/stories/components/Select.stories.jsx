import React from 'react';
import Select from '../../components/Forms/Select';
import '../assets/scss/_index.scss';

export default{
    title: 'Forms/Select',
    component: Select
}

const Template = (args) => <Select {...args}> Select</Select>

export const Default = Template.bind({});

Default.args = {
    label :'Select',
    color : 'primary',
    searcheable : true,
    data:'',
    onChange : _ => { },
    valueId : 'id',
    valueLabel : 'name',
    multiple : false,
}