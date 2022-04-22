import React, {useEffect, useState} from 'react';
import {CarouselStyle} from "../../../styles/main/carousel_style";
import BtnSlider from './BtnSlider'
import {SliderList} from "./slider_list";
import SliderItem from "./SliderItem";

export default function Slider () {
    const [current, setCurrent] = useState(0)
    const [currentInterval, setCurrentInterval] = useState(0)

    useEffect(() => {
        let inter = setTimeout(() => {
            autoSlider()
        }, 5000)
        setCurrentInterval(Number(inter))
        return () => { // вызывается при размонтировании и удалении из DOOM дерева
            clearTimeout(Number(inter));
        }
    }, [current])

    function nextSlide() {
        clearTimeout(currentInterval)
        setCurrent((current != ((SliderList.length - 1) * -100)) ? current - 100 : 0)
    }

    function prevSlide() {
        clearTimeout(currentInterval)
        setCurrent((current != 0) ? current + 100 : ((SliderList.length - 1) * -100))
    }

    function autoSlider() { // отключил автоматическую прокрутку слайдера
        setCurrent((current != ((SliderList.length - 1) * -100)) ? current - 100 : 0)
    }

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

