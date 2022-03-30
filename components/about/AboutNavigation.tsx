import React from 'react';
import Link from "next/link";
import Navigation from "../Navigation";

const AboutNavigation = () => {
    return (
        <Navigation>
            <Link href='/'>
                <a>Главная</a>
            </Link>
            <span>О больнице</span>
        </Navigation>
    );
};

export default AboutNavigation;