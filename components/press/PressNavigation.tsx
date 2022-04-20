import React from 'react';
import Navigation from "../Navigation";
import Link from "next/link";

const PressNavigation = () => {
    return (
        <Navigation>
            <Link href={`/`}>
                <a>Главная</a>
            </Link>
            <span>Пресс-центр</span>
        </Navigation>
    );
};

export default PressNavigation;