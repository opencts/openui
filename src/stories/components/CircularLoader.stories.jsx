import react from 'react';
import CircularLoader from '../../components/Progress/CircularLoader';

export default {
    title: 'Progress/CircularLoader',
    component: CircularLoader
}

const Template = (args) => <CircularLoader {...args} />

export const Default = Template.bind({});

Default.args = {
    color : 'primary',
    size : 40,
    borderSize : 3,
}