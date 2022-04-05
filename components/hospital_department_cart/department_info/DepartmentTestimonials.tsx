import React from 'react';
import Link from "next/link";
import TestimonialsCarousel from "./TestimonialsCarousel";
const DepartmentTestimonials = ({testimonials}) => {
    return (
        <section className='department-testimonials'>
            <h2>Отзывы об отделении</h2>
            <TestimonialsCarousel testimonials={testimonials}/>
            <div className="actions">
                <Link href='#'>
                    <a className="button button-secondary">оставить отзыв</a>
                </Link>
            </div>
        </section>
    );
};

export default DepartmentTestimonials;