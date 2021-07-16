import React from 'react';
import Flex from '../../components/Containers/Flex';

export default{
    title: 'Containers/Flex',
    component: Flex
}

const Template = (args) => <Flex {...args}>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
    <div>lorem</div>
</Flex>

export const Default = Template.bind({});

Default.args = {
    jc : 'center',
    ai : 'center',
    direction : 'row',
    autoScroll : false,
    gap : 0
}