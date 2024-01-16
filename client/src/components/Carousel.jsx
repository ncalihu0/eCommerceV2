import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Carousel.css'
import Banner1 from '../images/banner2.jpeg';
import Banner2 from '../images/banner3.webp';
import Banner3 from '../images/banner4.webp';
import Banner4 from '../images/banner5.webp';
import Banner5 from '../images/banner6.jpeg';

const CarouselPage = () => {
    return (
        <Carousel autoPlay infiniteLoop interval={5000} showArrows showStatus={false}>
            <div>
                <img src={Banner1} />
            </div>
            <div>
                <img src={Banner2} />
            </div>
            <div>
                <img src={Banner3} />
            </div>
            <div>
                <img src={Banner4} />
            </div>
            <div>
                <img src={Banner5} />
            </div>
        </Carousel>
    );
};

export default CarouselPage;