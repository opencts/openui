import react from 'react';
import DoubleCircularLoader from '../../components/Progress/DoubleCircularLoader';

export default {
    title: 'Progress/DoubleCircularLoader',
    component: DoubleCircularLoader
}

const Template = (args) => <DoubleCircularLoader {...args} />

export const Default = Template.bind({});

Default.args = {
    color : 'primary',
    size : 40,
    borderSize : 3,
}