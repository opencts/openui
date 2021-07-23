import react from 'react';
import Carousel from '../../components/Cards/Carousel';
import CarouselItem from '../../components/Cards/CarouselItem';
import img1 from '../../assets/img/jane.jpg';
import img2 from '../../assets/img/girl_hat.jpg';
import img3 from '../../assets/img/man_hat.jpg';

export default {
    title: 'Cards/Carousel',
    component: Carousel
}

const Template = (args) => <Carousel {...args} >
    <CarouselItem img={img1}>
        Lorem 1 ipsum dolor sit amet consectetur adipisicing elit. Delectus, dolorum!
    </CarouselItem>
    <CarouselItem img={img2}>
        Lorem 2 ipsum dolor sit amet consectetur adipisicing elit. Unde, dicta.
    </CarouselItem>
    <CarouselItem img={img3}>
        Lorem 3 ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempore!
    </CarouselItem>
</Carousel>

export const Default = Template.bind({});

Default.args = {
    scontrols: true,
    dots: true,
    width: '100%',
    height: '50vh',
    dotSize: 10,
    delay: 5
}
