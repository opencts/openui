import react from 'react';
import CircularDotsLoader from '../../components/Progress/CircularDotsLoader';

export default {
    title: 'Progress/CircularDotsLoader',
    component: CircularDotsLoader
}

const Template = (args) => <CircularDotsLoader {...args} />

export const Default = Template.bind({});

Default.args = {
    color : 'primary',
    size : 40,
}