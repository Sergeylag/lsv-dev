import React from 'react';
import Link from "next/link";

const PromoItem = ({href,src,width,height},id) => {
    return (
        <li key={id}>
           <Link href={href}>
               <a className='proportional-container r-16x9'>
                    <img alt='' src={src} width={width} height={height}/>
               </a>
           </Link>
        </li>
    );
};

export default PromoItem;