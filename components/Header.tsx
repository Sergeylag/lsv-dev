import React from 'react';
import SocialLinks from "./header/social_links";
import {
    Appoitment,
    ContentWraper,
    EyeSight,
    Stripe,
    Stripe2
} from "../styles/header_styles/header-styles";
import Search from "./header/search";
import Contact from "./header/contact";
import ImgGKB from "./header/img_gkb";
import CallCenter from "./header/call_center";
import ContactAddres from "./header/contact_addres";
import NavBar from "./header/nav_bar/nav_bar";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Stripe>
                <ContentWraper>
                    <EyeSight>Версия для слабовидящих</EyeSight>
                    <SocialLinks/>
                    <Search/>
                    <Contact/>
                </ContentWraper>
            </Stripe>
            <Stripe2>
                <ImgGKB/>
                <CallCenter/>
                <ContactAddres/>
                <Link href={`/cdc/appointment`} passHref>
                    <Appoitment>Записаться на приём</Appoitment>
                </Link>
            </Stripe2>
            <NavBar/>
        </header>
    );
};
