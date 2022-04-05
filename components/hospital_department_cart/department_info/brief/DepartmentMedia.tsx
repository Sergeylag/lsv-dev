import React, {useEffect, useState} from 'react';

const DepartmentMedia = ({media}) => {
    const [current, setCurrent] = useState(0)
    const [currentInterval, setCurrentInterval] = useState(0)

    useEffect(() => {
        let inter = setTimeout(() => {
            autoSlider()
        }, 5000)
        setCurrentInterval(Number(inter))
    }, [current])

    function nextSlide() {
        clearTimeout(currentInterval)
        setCurrent((current != ((media.length - 1) * -100)) ? current - 100 : 0)
    }

    function prevSlide() {
        clearTimeout(currentInterval)
        setCurrent((current != 0) ? current + 100 : ((media.length - 1) * -100))
    }

    function autoSlider() { // отключил автоматическую прокрутку слайдера
        setCurrent((current != ((media.length - 1) * -100)) ? current - 100 : 0)
    }
    return (
        <section className='department-media'>
            <h2>Фото и видео</h2>
            <div className='department-gallery'>
                <button type="button" className="carousel-button prev" onClick={()=>prevSlide()}/>
                <ul className='carousel-container'>
                    {media.map((e, id) => {
                        const transform = {
                            transform: `translateX(${current}%)`
                        }
                        if (e.item == 'iframe') {
                            return (
                                <li key={id} className='carousel-item' style={transform}>
                                    <figure className="proportional-container">
                                        <iframe src={e.src} allowFullScreen/>
                                    </figure>
                                </li>
                            )
                        } else if (e.item == 'img') {
                            return (
                                <li key={id} style={transform}>
                                    <figure>
                                        <img alt='' src={e.src}/>
                                    </figure>
                                </li>
                            )
                        } else {
                            return null
                        }

                    })}
                </ul>
                <button type="button" className="carousel-button next" onClick={()=>nextSlide()}/>
            </div>
        </section>
    );
};

export default DepartmentMedia;