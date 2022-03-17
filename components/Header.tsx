import React from 'react';
import SocialLinks from "./header/social_links";
import {
    Appoitment,
    ContentWraper,
    EyeSight,
    GlobalStyle,
    Stripe,
    Stripe2
} from "../styles/header_styles/header-styles"
import Search from "./header/search";
import Contact from "./header/contact";
import ImgGKB from "./header/img_gkb";
import CallCenter from "./header/call_center";
import ContactAddres from "./header/contact_addres";
import NavBar from "./header/nav_bar/nav_bar";

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
                <Appoitment href='/'>Записаться на приём</Appoitment>
            </Stripe2>
            <NavBar/>
        </header>
    );
};
