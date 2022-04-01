import React from 'react';
import Link from "next/link";

const DepartmentContactLink = ({href,text},id) => {
    return (
        <li key={id}>
            <Link href={href}>
                <a>{text}</a>
            </Link>
        </li>
    );
};

export default DepartmentContactLink;