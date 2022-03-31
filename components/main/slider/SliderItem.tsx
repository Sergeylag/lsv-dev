import Link from "next/link";

export default function SliderItem({id, src, height, width, title, lead, href, textLink}, current) {
    const transform = {
        transform: `translateX(${current}%)`
    }
    return (
        <li key={id} className='carousel-item' style={transform}>
            <figure>
                <div className='image'>
                    <img src={src} alt='lazy' width={width} height={height}/>
                </div>
                <figcaption>
                    <p className='title'>{title}</p>
                    {lead !== '#' ? (<div className='lead'>{lead}</div>) : null}
                    {href !== '#' ? (
                        <div className='link'>
                            <Link href={href}>
                                <a>{textLink}</a>
                            </Link>
                        </div>
                    ) : null}
                </figcaption>
            </figure>
        </li>
    );
};

