import React from 'react';
import Navigation from "../Navigation";
import Link from "next/link";

const CdcNavigation = () => {
    return (
        <Navigation>
            <Link href='/'>
                <a>Главная</a>
            </Link>
            <span>КДЦ</span>
        </Navigation>
    );
};

export default CdcNavigation;