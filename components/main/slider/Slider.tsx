import React from 'react';
import {CarouselStyle} from "../../../styles/main/carousel_style";
import BtnSlider from './BtnSlider'

const Slider = () => {

    const prevSlide = () => {
      console.log('prevSlide')
    }

    const nextSlide = () => {
      console.log('nextSlide')
    }

    return (
        <CarouselStyle>
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <div className="container-slider"></div>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
        </CarouselStyle>
    );
};

export default Slider;