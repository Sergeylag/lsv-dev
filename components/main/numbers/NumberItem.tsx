import React from 'react';
import Image from "next/image";

const NumberItem = ({src,width,height,number,primary,secondary},id) => {
    return (
        <li key={id}>
            <figure>
                <div className='image'>
                    <Image alt='' src={src} width={width} height={height}/>
                </div>
                <figcaption>
                    <div className='number'>{number}</div>
                    <div className='primary'>{primary}</div>
                    <div className='secondary'>{secondary}</div>
                </figcaption>
            </figure>
        </li>
    );
};

export default NumberItem;