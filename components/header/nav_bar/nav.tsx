import React from 'react';
import {Navigations} from "./nav_bar_styles/navigations";
import NavToggle from "./nav_toggle";

export default function Nav () {
    return (
        <Navigations>
            <input type='checkbox' id='header-nav-toggle' className='visually-hidden hamburger-morpher'/>
            <label htmlFor='header-nav-toggle' className='morphing-hamburger'>
                <span className='a'></span>
                <span className='b'></span>
                <span className='c'></span>
            </label>
            <NavToggle/>
        </Navigations>
    );
};
