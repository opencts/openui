import React from 'react';
import Checkbox from '../../components/Forms/Checkbox';
import '../assets/scss/_index.scss';

export default {
    title:'Forms/Checkbox',
    component: Checkbox
}

const Template = (args) => <Checkbox {...args}/>

export const Default = Template.bind({});

Default.args = {
    color : 'primary',
    onChange : _ => { },
    size : 10,
    checked : false
}

