import React from 'react';
import Carousel from 'nuka-carousel';
import Banner1 from '../../assets/images/banner-1.jpg';
import Banner2 from '../../assets/images/banner-2.jpg';

function HomeCarousel() {
    return (
        <Carousel autoplay={true} speed={3000}e wrapAround={true}>
         <img src={Banner1} alt="Banner 1"/>
         <img src={Banner2} alt="Banner 2"/>
        </Carousel>
    )
}

export default HomeCarousel
