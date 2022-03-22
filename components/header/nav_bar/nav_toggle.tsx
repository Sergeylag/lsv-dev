import React from 'react';
// import Link from 'next/link';
import {Toggle} from "./nav_bar_styles/toggle";
import {NavBarList} from "./nav_bar_list";
import ListLinks from "./list_links";

export default function NavToggle() {
    return (
        <Toggle className={'links'}>
            {NavBarList.map(ListLinks)}

            {/*{NavBarList.map(({id, title, path, ul}) => {*/}
            {/*    return (*/}
            {/*        <li key={id}>*/}
            {/*            <Link href={path}>*/}
            {/*                <a>{title}</a>*/}
            {/*            </Link>*/}
            {/*            {ul.length ? (*/}
            {/*                <ul key={id}>*/}
            {/*                    {ul.map(ListLinks)}*/}
            {/*                </ul>*/}
            {/*            ) : null}*/}
            {/*        </li>*/}
            {/*    )*/}
            {/*})}*/}
        </Toggle>
    );
};
