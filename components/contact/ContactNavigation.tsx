import React from 'react';
import Navigation from "../Navigation";
import Link from "next/link";

const ContactNavigation = () => {
    return (
        <Navigation>
            <Link href={`/`}>
                <a>Главная</a>
            </Link>
            <span>Контакты</span>
        </Navigation>
    );
};

export default ContactNavigation;