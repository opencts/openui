import React from 'react';
import Grid from '../../components/Containers/Grid';
import '../assets/scss/_index.scss';

export default {
    title: 'Containers/Grid',
    component: Grid
}

const Template = (args) => <Grid {...args}>Grid</Grid>

export const Default = Template.bind({});

Default.args = {
    sm : '1',
    md : '2',
    lg : '4',
    rowGap : null,
    colGap : null,
    gap : null,
    align: ''
}