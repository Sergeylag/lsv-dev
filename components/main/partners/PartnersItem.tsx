import React from 'react';
import Link from "next/link";

const PartnersItem = ({id,href,src,width,height},current) => {

    const transform = {
        transform: `translateX(${current}%)`
    }

    return (
        <li key={id} className='carousel-item' style={transform}>
            <Link href={href}>
                <a>
                    <img alt='' src={src} width={width} height={height}/>
                </a>
            </Link>
        </li>
    );
};

export default PartnersItem;