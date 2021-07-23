import react from 'react';
import BarsLoader from '../../components/Progress/BarsLoader';

export default {
    title:'Progress/BarsLoader',
    component: BarsLoader
}

const Template = (args) => <BarsLoader {...args}/>

export const Default = Template.bind({});

Default.args = {
    size : 10,
    color : 'primary',
}