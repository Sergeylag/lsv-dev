import React from 'react';
import {MainChief} from "../../../styles/main/chief_style";
import p from '../../../public/img/main/chief/pogonin.jpg'
import FormChief from "./FormChief";


export default function Chief () {
    return (
        <MainChief>
            <h2>Написать главному врачу</h2>
            <div className='content-wrapper'>
                <figure className='chief-figure'>
                    <div className='image'>
                        <img alt='lazy' src={p.src}/>
                    </div>
                    <figcaption>
                        <div className='name'> Погонин <br/>Алексей Владимирович </div>
                        <div className='title'>Главный врач <br/> ГКБ им. С.И. Спасокукоцкого</div>
                    </figcaption>
                </figure>
                <FormChief/>
            </div>

        </MainChief>
    );
};

