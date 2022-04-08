import React from 'react';
import Navigation from "../../Navigation";
import Link from "next/link";

const ChiefNavigation = () => {
    return (
        <Navigation>
            <Link href='/'>
                <a>Главная</a>
            </Link>
            <Link href='/contact'>
                <a>Контакты</a>
            </Link>
            <span>Написать главному врачу</span>
        </Navigation>
    );
};

export default ChiefNavigation;