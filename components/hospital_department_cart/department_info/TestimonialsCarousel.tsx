import React, {useState} from 'react';
import Link from "next/link";

const TestimonialsCarousel = ({testimonials}) => {
    const [current, setCurrent] = useState(0)

    function nextSlide() {
        setCurrent((current != ((testimonials.length - 2) * -100)) ? current - 100 : 0)
    }

    function prevSlide() {
        setCurrent((current != 0) ? current + 100 : ((testimonials.length - 2) * -100))
    }
    return (
        <div className='testimonials__carousel'>
            <button type="button" className="carousel-button prev" onClick={()=>prevSlide()}/>
            <ul>
                {testimonials.map((e,id)=>{
                    const transform = {
                        transform: `translateX(${current}%)`
                    }
                    return(
                        <li key={id} style={transform}>
                            <img alt='' src={e.src}/>
                            <div className='name'>{e.title}</div>
                            <p>{e.text}</p>
                            <Link href={e.link}>
                                <a>Читать полностью</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <button type="button" className="carousel-button next" onClick={()=>nextSlide()}/>
        </div>
    );
};

export default TestimonialsCarousel;