import React from 'react';
import Link from "next/link";

const ServicesSpecializations = ({servicesList}) => {
    const {headTag, headText, bodyTag, list} = servicesList

    return (
        <section className="services__specializations">
            {headTag == 'h2' ? <h2>{headText}</h2> : (
                headTag == 'h3' ? <h3>{headText}</h3> : null
            )}
            <ul>
                { bodyTag == 'li' ? (
                    list.map((e,id)=>{
                        return(
                            <li key={id}><p>{e}</p></li>
                        )
                    })
                    ) : ( list.map((e, id) => {
                        return (
                            <li key={id}>
                                <Link href={e.link}>
                                    <a>{e.text}</a>
                                </Link>
                            </li>
                        )
                    }
                    ))
                }
            </ul>
        </section>
    );
};

export default ServicesSpecializations;