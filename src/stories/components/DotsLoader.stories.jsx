import react from 'react';
import DotsLoader from '../../components/Progress/DotsLoader';

export default {
    title: 'Progress/DotsLoader',
    component: DotsLoader
}

const Template = (args) => <DotsLoader {...args} />

export const Default = Template.bind({});

Default.args = {
    size: 10,
    color: 'primary',
}