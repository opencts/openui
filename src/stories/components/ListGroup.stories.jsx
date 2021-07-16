import React from 'react';
import ListGroup from '../../components/List/ListGroup';
import '../../assets/scss/_index.scss';
import ListItem from '../../components/List/ListItem';

export default {
    title: 'List/ListGroup',
    component: ListGroup
}

const Template = (args) => <ListGroup {...args}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 1</ListItem>
</ListGroup>

export const Default = Template.bind({});

Default.args = {
    title: '',
    titleColor: 'gray',
    separatorAfter: false,
    separatorSize: '1',
    separatorColor: 'light-gray',
    icon: '',
}
