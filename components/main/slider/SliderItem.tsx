import Image from "next/image";

export default function SliderItem ({id, src, height, width}, current) {
    const transform = {
        transform: `translateX(${current}%)`
    }
    return (
        <li key={id} className='carousel-item' style={transform}>
            <figure>
                <div className='image'>
                    <Image src={src} alt='lazy' width={width} height={height}/>
                </div>
                <figcaption>
                    <p className='title'>{id}</p>
                    <div className='lead'></div>
                </figcaption>
            </figure>
        </li>
    );
};

