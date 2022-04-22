import React, {useEffect, useState} from 'react';
import {MainPartners} from "../../../styles/main/partners_style";
import BtnPartners from "./BtnPartners";
import PartnersItem from "./PartnersItem";
import {PartnersList} from "./partners_list";

export default function Partners() {
    const [current, setCurrent] = useState(0)
    const [currentInterval, setCurrentInterval] = useState(0)

    useEffect(() => {
        let inter = setTimeout(() => {
            autoSlider()
        }, 5000)
        setCurrentInterval(Number(inter))
        return () => {
            clearTimeout(Number(inter))
        }
    }, [current])

    function autoSlider(){
        setCurrent((current != ((PartnersList.length - 4) * -100)) ? current - 100 : 0)
    }

    function nextSlide() {
        clearTimeout(currentInterval)
        setCurrent((current != ((PartnersList.length - 4) * -100)) ? current - 100 : 0)
    }

    function prevSlide() {
        clearTimeout(currentInterval)
        setCurrent((current != 0) ? current + 100 : ((PartnersList.length - 4) * -100))
    }

    return (
        <MainPartners>
            <div>
                <BtnPartners moveSlide={prevSlide} direction={"prev"}/>
                <ul className="carousel-container">
                    {PartnersList.map(e => PartnersItem(e, current))}
                </ul>
                <BtnPartners moveSlide={nextSlide} direction={"next"}/>
            </div>
        </MainPartners>
    );
};

