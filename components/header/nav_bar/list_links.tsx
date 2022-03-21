import React from 'react';
import Link from "next/link";

export default function ListLinks ({id, path, title, ul}) {
    return (
            <li key={id}>
                <Link href={path}>
                    <a>{title}</a>
                </Link>
                {ul.length ? (
                    <ul key={id}>
                        {ul.map(ListLinks)}
                    </ul>
                ) : null}
            </li>
    );
};
