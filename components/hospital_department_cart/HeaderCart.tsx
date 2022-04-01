import React from 'react';
import Link from "next/link";

const HeaderCart = ({title,headerLinks}) => {
    return (
        <header>
            <h1>{title}</h1>
            <nav className='section-nav'>
            {headerLinks.map(({link,text},id)=>{
                return(
                    <Link key={id} href={link}>
                        <a>{text}</a>
                    </Link>
                )
            })}
            </nav>
        </header>
    );
};

export default HeaderCart;