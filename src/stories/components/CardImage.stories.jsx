import React from 'react'
import Card from '../../components/Cards/Card';
import CardContent from '../../components/Cards/CardContent';
import CardMedia from '../../components/Cards/CardMedia';
import Container from '../../components/Containers/Container';

export default {
    title: 'Cards/CardImage',
    component: CardMedia
}

const Template = (args) =>

    <Container style={{ marginTop: '20px', width: '50%' }}>
        <Card {...args} closable>
            <CardContent>
                <CardMedia image="http://lorempixel.com/400/200/nature/" />
                Hello
            </CardContent>
        </Card >
     </Container >



export const Default = Template.bind({})