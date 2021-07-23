import react from 'react';
import CarouselItem from '../../components/Cards/CarouselItem';

export default {
    title: 'Cards/CarouselItem',
    component: CarouselItem
}

const Template = (args) => <CarouselItem {...args} />

export const Default = Template.bind({});

Default.args = {
    img: ''
}
