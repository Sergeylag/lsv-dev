import React from 'react';
import SocialLinks from "./social_links";
import {
    Appoitment,
    ContentWraper,
    EyeSight,
    GlobalStyle,
    Stripe,
    Stripe2
} from "../../styles/header_styles/header-styles"
import Search from "./search";
import Contact from "./contact";
import ImgGKB from "./img_gkb";
import CallCenter from "./call_center";
import ContactAddres from "./contact_addres";
import NavBar from "./nav_bar/nav_bar";

export default function Header() {
    return (
        <header>
            <GlobalStyle/>
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
                <Appoitment href='/index2'>Записаться на приём</Appoitment>
            </Stripe2>
            <NavBar/>
        </header>
    );
};
