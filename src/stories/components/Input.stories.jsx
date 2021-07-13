import React from 'react'
import Input from '../../components/Forms/Input';
import '../assets/scss/_index.scss';
import '../assets/scss/_inputs.scss';

export default {
    title: 'Forms/Input',
    component: Input
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
    color: 'primary',
    labelIcon: 'lock',
    actionIcon: 'eye',
    actionIconFlip: 'eyeSlash',
    label: 'Mot de passe',
    hint: null,
    type: 'password',
    required: true,
    errorMsgs: null,
    contentCase: 'default',
    step: 1,
    value: '',
    strong: true,
    lowerChars: false,
    upperChars: false,
    specialChars: false,
    numericChars: false,
    min: '8'
}
