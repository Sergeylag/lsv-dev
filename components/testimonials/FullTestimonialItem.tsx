import React from 'react';
import Link from "next/link";

const FullTestimonialItem = ({item}) => {
    const {id,date,logo,department,author,text,image} = item
    return (
        <div className="content-wrapper with-sidebar">
            <article className="content__show testimonials__show">
                <header>
                    <h1>№{id}</h1>
                    <figure>
                        <img alt="" src={logo}/>
                    </figure>
                    <time>{date}</time>

                    <div className="subject">
                        <Link href={`${department.link}`}>
                            <a>{department.name}</a>
                        </Link>
                    </div>
                    <div className="author">{author}</div>
                </header>

                <div className="text">
                    {text.map((i,id)=>{
                        return(
                            <p key={id}>{i}</p>
                        )
                    })}
                </div>

                <footer className="captioned-figures">
                    <figure>
                        <div className="image">
                            <img alt="" src={image}/>
                        </div>
                        <figcaption>Вероятно, потребуется подпись</figcaption>
                    </figure>
                </footer>
            </article>
            <aside className="sidebar">
                <section className="posts__sidebar">
                    <ul className="posts__list cards-list">
                    </ul>
                </section>
            </aside>
        </div>
    );
};

export default FullTestimonialItem;