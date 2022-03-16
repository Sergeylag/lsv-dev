import React from 'react';
import SocialLinks from "./social_links";
import {ContentWraper, EyeSight, GlobalStyle, Stripe, Stripe2} from "../../styles/header_styles/header-styles"
import Search from "./search";
import Contact from "./contact";
import ImgGKB from "./img_gkb";
import CallCenter from "./call_center";

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
                    <CallCenter></CallCenter>
            </Stripe2>
        </header>
    );
};
