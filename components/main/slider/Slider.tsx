import React, {useState} from 'react';
import {CarouselStyle} from "../../../styles/main/carousel_style";
import BtnSlider from './BtnSlider'
import {SliderList} from "./slider_list";
import SliderItem from "./SliderItem";


export default function Slider () {
    let timer;
    const [current, setCurrent] = useState(0)

    function nextSlide() {
        setCurrent((current != ((SliderList.length - 1) * -100)) ? current - 100 : 0)

    }

    function prevSlide() {
        setCurrent((current != 0) ? current + 100 : ((SliderList.length - 1) * -100))
    }
    // console.log('1',timer)
    function autoSlider() { // отключил автоматическую прокрутку слайдера
       timer = setTimeout(nextSlide, 5000)
        console.log('2',timer)
    }
    // console.log('3',timer)

    // autoSlider()
    return (
        <CarouselStyle>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            <ul className="container-slider">
                {SliderList.map(e => SliderItem(e, current))}
            </ul>
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
        </CarouselStyle>
    );
};

 Slider;