import React from 'react'
import Icon from '../../components/Fonts/Icon';
import Badge from '../../components/Tips/Badge';
import '../assets/scss/_index.scss';

export default {
    title: 'Tips/Badge',
    component: Badge
}

const Template = (args) => <div>
    <Icon name="user" />
    <Badge {...args}></Badge>
</div>

export const Default = Template.bind({})
Default.args = {
    color: 'primary',
    vpos: 'bottom',
}