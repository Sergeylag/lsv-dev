import React from 'react';
import Navigation from "../Navigation";
import Link from "next/link";

const TestimonialsNavigation = () => {
    return (
        <Navigation>
            <Link href='/'>
                <a>Главная</a>
            </Link>
            <span>Отзывы</span>
        </Navigation>
    );
};

export default TestimonialsNavigation;