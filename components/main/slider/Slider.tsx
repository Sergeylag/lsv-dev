import React, {useState} from 'react';
import {CarouselStyle} from "../../../styles/main/carousel_style";
import BtnSlider from './BtnSlider'
import {SliderList} from "./slider_list";
import SliderItem from "./SliderItem";

const Slider = () => {

    const [current, setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent((current!=((SliderList.length-1)*-100)) ? current-100 : 0)
    }

    const prevSlide = () => {
        setCurrent((current != 0) ? current+100 : ((SliderList.length-1)*-100))
    }
    return (
        <CarouselStyle>
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <ul className="container-slider">
                {SliderList.map(e => SliderItem(e, current))}
            </ul>
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
        </CarouselStyle>
    );
};

export default Slider;