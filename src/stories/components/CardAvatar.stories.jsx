import React from 'react'
import Card from '../../components/Cards/Card';
import CardAction from '../../components/Cards/CardAction';
import CardMedia from '../../components/Cards/CardMedia';
import Button from '../../components/Forms/Button';

export default {
    title: 'Cards/CardAvatar',
    component: CardMedia
}

const Template = (args) =>
    <Card {...args} avatar="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        title="This is the title of my card" closable
        subtitle="this is subtitle">
        <CardAction>
            <Button outlined color="secondary" >
                Submit
            </Button>
        </CardAction>
    </Card>

export const Default = Template.bind({})