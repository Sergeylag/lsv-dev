import React from 'react';

export default function BtnPartners({ direction, moveSlide}) {
    return (
        <button
            onClick={()=> {
                moveSlide()
            }}
            className={direction === "next" ? "carousel-button next" : "carousel-button prev"}
        />
    );
}
