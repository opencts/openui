import React from 'react'
import Card from '../../components/Cards/Card';
import CardContent from '../../components/Cards/CardContent';
import CardMedia from '../../components/Cards/CardMedia';
import CardSubTitle from '../../components/Cards/CardSubTitle';
import CardTitle from '../../components/Cards/CardTitle';
import Container from '../../components/Containers/Container';
import Element from '../../components/Containers/Element';
import Flex from '../../components/Containers/Flex';
import Icon from '../../components/Fonts/Icon';

export default {
    title: 'Cards/CardMusic',
    component: CardMedia
}

const musicCard = {
    cardSize: { width: "50px", height: "250px" },
    content: { display: "flex", flexWrap: "nowrap", justifyContent: "center" },
    musicButton: { display: "flex", justifyContent: "space-between", marginTop: "30px" },
    media: { height: "100%", width: "200px" }
}

const Template = (args) =>

    <Container>
        <Flex gap={0}>
            <Card closable>
                <CardContent>
                    <div style={{ margin: "10px" }}>
                        <CardTitle title="HMagnum Dog" />
                        <CardSubTitle subtitle="Vas dire a ton ex" />
                    </div>
                    <Flex ai="center" jc="center" gap={30}>
                        <Icon color="dark" name="stepBackward" />
                        <Icon color="dark" name="play" style={{ fontSize: '30px' }} />
                        <Icon color="dark" name="stepForward" />
                    </Flex>
                </CardContent>
            </Card>
            <Element elevation="3">
                <CardMedia style={musicCard.media} image="https://picsum.photos/200/150" />
            </Element>
        </Flex>
    </Container>



export const Default = Template.bind({})