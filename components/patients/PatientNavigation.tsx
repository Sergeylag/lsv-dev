import React from 'react';
import Link from "next/link";
import Navigation from "../Navigation";

const PatientNavigation = () => {
    return (
        <Navigation>
            <Link href='/'>
                <a>Главная</a>
            </Link>
            <span>Пациентам</span>
        </Navigation>
    );
};

export default PatientNavigation;