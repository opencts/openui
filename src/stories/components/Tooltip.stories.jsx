import react from 'react'
import Button from '../../components/Forms/Button'
import Tooltip from '../../components/Tips/Tooltip'

export default {
    title: 'Tips/Tooltip',
    component: Tooltip
}

const Template = (args) => <Tooltip {...args}><Button>Hover me, please</Button></Tooltip>

export const Default = Template.bind({});

Default.args = {
    title: '',
    color: 'dark',
    position: 'top',
    maxWidth: '200',
}