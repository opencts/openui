import react from 'react'
import Button from '../../components/Forms/Button';
import ListItem from '../../components/List/ListItem';
import Dropdown from '../../components/Tips/Dropdown'

export default {
    title: 'Tips/Dropdown',
    component: Dropdown
}

const Template = (args) => <Dropdown {...args} component={() => <Button>Click me</Button>} >
    <ListItem separatorAfter={false}>My custom very long Item 1</ListItem>
    <ListItem separatorAfter={false}><Button color='danger' icon='eye'>Hello</Button></ListItem>
</Dropdown>

export const Default = Template.bind({});

Default.args = {
    component: () => { },
    color: 'light',
    position: 'bottom',
    width: '200'
}