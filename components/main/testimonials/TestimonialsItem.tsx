import React from 'react';
import Link from "next/link";

export default function TestimonialsItem ({subject,name,date,text,link},id) {
    return (
        <li key={id}>
            <div className='testimonials__preview'>
                <div className='subject'>{subject}</div>
                <div className='name'>{name}</div>
                <time>{date}</time>
                <div className='text'>
                    <p>{text}</p>
                </div>
                <div className='link'>
                    <Link href={link}>
                        <a>Читать полностью</a>
                    </Link>
                </div>
            </div>
        </li>
    );
};
