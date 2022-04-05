import React from 'react';
import Navigation from "../Navigation";
import Link from "next/link";

const ServicesNavigation = () => {
    return (
        <Navigation>
            <Link href='/'>
                <a>Главная</a>
            </Link>
            <span>Платные услуги</span>
        </Navigation>
    );
};

export default ServicesNavigation;