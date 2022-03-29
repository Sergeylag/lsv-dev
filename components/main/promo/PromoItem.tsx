import React from 'react';
import Link from "next/link";
import Image from "next/image";

const PromoItem = ({href,src,width,height},id) => {
    return (
        <li key={id}>
           <Link href={href}>
               <a className='proportional-container r-16x9'>
                    <Image alt='' src={src} width={width} height={height}/>
               </a>
           </Link>
        </li>
    );
};

export default PromoItem;