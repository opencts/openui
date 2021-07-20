import react from 'react'
import Button from '../../components/Forms/Button';
import ListItem from '../../components/List/ListItem';
import Accordeon from '../../components/Tips/Accordeon'

export default {
    title: 'Tips/Accordeon',
    component: Accordeon
}

const Template = (args) => <Accordeon {...args}>
    <ListItem separatorAfter={false}>Sub sub Item 1</ListItem>
    <ListItem separatorAfter={false}>Sub sub Item 2</ListItem>
    <Button color='secondary'>Submit</Button>
</Accordeon>

export const Default = Template.bind({});

Default.args = {
    title: '',
    padding: '2', // 1-5
    icon: '',
    negativeIcon: '',
}

