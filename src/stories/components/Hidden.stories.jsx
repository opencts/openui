import React from 'react';
import Hidden from '../../components/Containers/Hidden';

export default{
    title: 'Containers/Hidden',
    component: Hidden
}

const Template = (args) => <Hidden {...args}>
    <div>lorem</div>
</Hidden>

export const Default = Template.bind({});

Default.args = {
    up : null,
    down : '800px'
}