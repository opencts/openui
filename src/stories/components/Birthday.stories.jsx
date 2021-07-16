import React from 'react';
import Birthday from '../../components/Forms/Birthday';

export default{
    title: 'Forms/Birthday',
    component: Birthday
}

const Template = (args) => <Birthday {...args}/>

export const Default = Template.bind({});

Default.args = {
    onChange : _ => { },
    // errorMsg : _ERROR_MSGS.date,
    required : true
}