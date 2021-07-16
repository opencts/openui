import React from 'react'
import Tab from '../../components/Tabs/Tab';
import TabItem from '../../components/Tabs/TabItem';
import '../assets/scss/_index.scss';

export default {
    title: 'Tabs/Tab',
    component: Tab
}

const Template = (args) => <Tab {...args}>
    <TabItem title="Tab 1">
        Lorem 1
    </TabItem>
    <TabItem title="Tab 2">
        Lorem 2
    </TabItem>
    <TabItem title="Tab 3">
        Lorem 3
    </TabItem>
</Tab>

export const Default = Template.bind({})
Default.args = {
    color:  'primary'
}