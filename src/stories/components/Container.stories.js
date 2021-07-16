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
    sm : null,
    md : null,
    lg : null
}
