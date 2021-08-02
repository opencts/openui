import react from 'react';
import ProgressBar from '../../components/Progress/ProgressBar';

export default {
    title: 'Progress/ProgressBar',
    component: ProgressBar
}

const Template = (args) => <ProgressBar {...args} />

export const Default = Template.bind({});

Default.args = {
    color: "primary",
    height: 25,
    indeterminate: false,
    value: 57,
    radius: 50,
    showValue: false,
}