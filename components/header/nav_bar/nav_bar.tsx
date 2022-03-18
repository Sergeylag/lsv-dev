import React from 'react';
import {SectionNavBar} from "./nav_bar_styles/section_nav_bar";
import Nav from "./nav";

export default function NavBar () {
    return (
        <SectionNavBar className="header-navigation">
            <Nav/>
        </SectionNavBar>
    );
};
