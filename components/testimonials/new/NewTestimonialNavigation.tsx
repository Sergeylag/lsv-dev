import React from 'react';
import Navigation from "../../Navigation";
import Link from "next/link";

const TestimonialsNavigation = () => {
    return (
        <Navigation>
            <Link href={`/`}>
                <a>Главная</a>
            </Link>
            <Link href={`/testimonial`}>
                <a>Отзывы</a>
            </Link>
            <span>Оставить отзыв</span>
        </Navigation>
    );
};

export default TestimonialsNavigation;