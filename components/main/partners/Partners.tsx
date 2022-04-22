import React, {useEffect, useReducer} from 'react';
import {MainPartners} from "../../../styles/main/partners_style";
import BtnPartners from "./BtnPartners";
import PartnersItem from "./PartnersItem";
import {PartnersList} from "./partners_list";

const initialState = {current: 0, interval: 0}

function reducer(state, action){
    switch (action.type) {
        case "increment":
            return{
                ...state,
                current: action.payload
            }
        case "decrement":
            return{
                ...state,
                current: action.payload
            }
        case "interval":
            return {
                ...state,
                interval: action.payload
            }
        default:
            return state
    }
}

export default function Partners() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        let inter = setTimeout(() => {
            dispatch({
                type: 'increment',
                payload: (state.current != ((PartnersList.length - 4) * -100)) ? state.current - 100 : 0
            })
        }, 5000)
        dispatch({
            type: 'interval',
            payload: Number(inter)
        })
        return () => {
            clearTimeout(Number(inter))
        }
    }, [state.current])

    function nextSlide() {
        clearTimeout(state.interval)
        dispatch({
            type: 'increment',
            payload: (state.current != ((PartnersList.length - 4) * -100)) ? state.current - 100 : 0
        })
    }

    function prevSlide() {
        clearTimeout(state.interval)
        dispatch({
            type: 'decrement',
            payload: (state.current != 0) ? state.current + 100 : ((PartnersList.length - 4) * -100)
        })
    }

    return (
        <MainPartners>
            <div>
                <BtnPartners moveSlide={prevSlide} direction={"prev"}/>
                <ul className="carousel-container">
                    {PartnersList.map(e => PartnersItem(e, state.current))}
                </ul>
                <BtnPartners moveSlide={nextSlide} direction={"next"}/>
            </div>
        </MainPartners>
    );
};

