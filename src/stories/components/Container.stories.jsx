import React from 'react';
import Container from '../../components/Containers/Container';
import '../assets/scss/_index.scss';

export default {
    title: 'Containers/Container',
    component: Container
}

const Template = (args) => <Container {...args}>Story Container</Container>

export const Default = Template.bind({})
Default.args = {
    fluid: false,
    sm: '92',
    md: '82',
    lg: '72'
}
