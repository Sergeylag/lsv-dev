import React from 'react';
import {MainTestimonials} from "../../styles/testimonials/testimonials_style";
import {TestimonialsList} from './testimonials_list';
import Link from "next/link";
import TestimonialsItem from "./TestimonialsItem";

export default function Testimonials () {
    return (
        <MainTestimonials>
            <div className='content-wrapper'>
                <h1>Отзывы</h1>
                <ul className='testimonials__list'>
                    {TestimonialsList.map((e,id)=> {
                        return(TestimonialsItem(e,id))
                    })}
                </ul>
                <nav>
                    <Link href='#'>
                        <a className='button button-secondary'>Оставить отзыв</a>
                    </Link>
                </nav>
            </div>
        </MainTestimonials>
    );
};
