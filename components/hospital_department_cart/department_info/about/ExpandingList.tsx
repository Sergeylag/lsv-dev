import React from 'react';
import Link from "next/link";

const ExpandingList = ({list}) => {
    return (
        <section className='expanding-list'>
            {list.map((e,id)=>{
                return(
                    <details key={id}>
                        <summary>
                            {e.summary}
                        </summary>
                        {e.text.map((e,id)=>{
                            if(e.tag == 'p'){
                                return (
                                    <p key={id}>
                                        <strong>{e.strong}</strong>
                                        {e.text}
                                        <Link href={e.link.href}>
                                            <a>{e.link.text}</a>
                                        </Link>
                                    </p>
                                )
                            }else if(e.tag == 'ul'){
                                return (
                                    <ul key={id}>
                                        {e.list.map((e,id)=>{
                                            return(
                                                <li key={id}>
                                                    {e}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                )
                            } else return
                        })}
                    </details>
                )
            })}
        </section>
    );
};

export default ExpandingList;