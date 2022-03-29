import React from 'react';
import Link from "next/link";

const FeedbackItem = ({link, text}, id) => {
    return (
        <li key={id}>
            <Link href={link}>
                <a rel="external nofollow noreferrer" target="_blank">{text}</a>
            </Link>
        </li>
    );
};

export default FeedbackItem;