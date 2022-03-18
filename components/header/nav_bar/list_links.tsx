import React from 'react';
import Link from "next/link";

export default function ListLinks ({id, title, path}) {
    return (
            <li key={id}>
                <Link href={path}>
                    <a>{title}</a>
                </Link>
            </li>
    );
};
