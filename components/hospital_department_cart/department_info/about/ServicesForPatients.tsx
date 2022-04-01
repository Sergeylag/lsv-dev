import React from 'react';
import Link from "next/link";

const ServicesForPatients = ({services}) => {
    const {headText, list} = services

    return (
        <section className="services__for-patients">
            <h2>{headText}</h2>
            <ul>
                {
                    list.map((e, id) => {
                        return (
                            <li key={id}>
                                <figure className="js-wide-click">
                                    <div className="image">
                                        <img alt="" src={e.src}/>
                                    </div>
                                    <figcaption>
                                        <Link href={e.link}>
                                            <a className="js-main-link">{e.textLink}</a>
                                        </Link>
                                    </figcaption>
                                </figure>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default ServicesForPatients;