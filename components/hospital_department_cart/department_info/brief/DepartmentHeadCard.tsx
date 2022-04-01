import React from 'react';
import Link from "next/link";
const DepartmentHeadCard = ({headCard}) => {
    const {position, src, fio, link} = headCard
    return (
        <header>
            <h2>{position}</h2>
            <figure className="doctor-image">
                <div className="image">
                    <img alt="" src={src}/>
                </div>
                <figcaption>
                    <div className="name">
                        <Link href={link}>
                            <a>{fio}</a>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        </header>
    );
};

export default DepartmentHeadCard;