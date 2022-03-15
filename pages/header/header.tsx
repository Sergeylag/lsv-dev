import React from 'react';
import SocialLinks from "./social_links";
import {ContentWraper, EyeSight, GlobalStyle, Stripe} from "../../styles/header_styles/header-styles"
import Search from "./search";
import Contact from "./contact";

export default function Header(){
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
        </header>
    );
};
