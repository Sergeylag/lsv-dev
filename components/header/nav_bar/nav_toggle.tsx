import React from 'react';
import {Toggle} from "./nav_bar_styles/toggle";
import {NavBarList} from "./nav_bar_list";
import ListLinks from "./list_links";

export default function NavToggle() {
    return (
        <Toggle className={'links'}>
            {NavBarList.map(ListLinks)}
        </Toggle>
    );
};
