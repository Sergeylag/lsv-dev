import React from 'react';
import Link from "next/link";
import Image from "next/image";

const PartnersItem = ({id,href,src,width,height},current) => {

    const transform = {
        transform: `translateX(${current}%)`
    }

    return (
        <li key={id} className='carousel-item' style={transform}>
            <Link href={href}>
                <a>
                    <Image alt='' src={src} width={width} height={height}/>
                </a>
            </Link>
        </li>
    );
};

export default PartnersItem;