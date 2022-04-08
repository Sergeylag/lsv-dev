import React from 'react';
import ChiefPlug from "../../components/contact/chief/ChiefPlug";
import ChiefNavigation from "../../components/contact/chief/ChiefNavigation";
import {ChiefContactMain} from "../../styles/contact/chief/chief";

const Chief = () => {
    return (
        <ChiefContactMain>
            <ChiefNavigation/>
            <ChiefPlug/>
        </ChiefContactMain>
    );
};

export default Chief;