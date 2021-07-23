import React from 'react';
import Password from '../../components/Forms/Password';

export default {
    title: 'Forms/Password',
    component: Password
}

const Template = (args) => <Password {...args}/>

export const Default = Template.bind({});

Default.args = {
    label : 'Mot de passe',
    icon : true,
    strong : true,
    lowerChars : false,
    upperChars : false,
    specialChars : false,
    numericChars : false,
    min : '8',
    // errorMsg : _ERROR_MSGS.password,
    onChange : _ => { },
}