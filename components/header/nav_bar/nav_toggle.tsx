import React from 'react';
import Link from 'next/link';
import {Toggle} from "./nav_bar_styles/toggle";
import AboutLinks from "./about_links";

export default function NavToggle() {
    return (
        <Toggle>
            <li>
                <Link href="/">
                    <a>Главная</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>О больнице</a>
                </Link>
                <AboutLinks/>
            </li>
            <li>
                <a href="/patients">Пациентам</a>
            </li>
            <li>
                <a href="/cdc">Службы и отделения</a>
            </li>
            <li>
                <span>Платные услуги</span>
            </li>
            <li>
                <span>Пресс-центр</span>
            </li>
            <li>
                <a href="/contact">Контакты</a>
            </li>
        </Toggle>
    );
};
