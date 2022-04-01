import React from 'react';
import Link from "next/link";

const DepartmentContactAction = ({tag, href, text}, id) => {

    if (tag == 'a') {
        return (
            <li key={id} className="schedule">
                <Link href={href}>
                    <a>{text}</a>
                </Link>
            </li>
        )
    } else if (tag == 'p') {
        return (
            <li key={id} className="schedule">
                <p>{text}</p>
            </li>
        )
    }
}

export default DepartmentContactAction;