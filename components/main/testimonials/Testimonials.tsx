import React from 'react';
import {MainTestimonials} from "../../../styles/main/testimonials_style";
import {TestimonialsList} from './testimonials_list';
import Link from "next/link";
import TestimonialsItem from "./TestimonialsItem";

export default function Testimonials () {
    return (
        <MainTestimonials>
            <div className='content-wrapper'>
                <h2>Отзывы</h2>
                <ul className='testimonials__list'>
                    {TestimonialsList.map((e,id)=> {
                        return(TestimonialsItem(e,id))
                    })}
                </ul>
                <nav>
                    <Link href={`/testimonials`}>
                        <a className='button button-secondary'>Все отзывы</a>
                    </Link>
                </nav>
            </div>
        </MainTestimonials>
    );
};
