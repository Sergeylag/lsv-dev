import React from 'react';
import {PageNavigation} from "../styles/page_navigation/page_navigation";

const Navigation = ({children}) => {
    return (
        <PageNavigation>
            <div className="content-wrapper">
                {children}
            </div>
        </PageNavigation>
    );
};

export default Navigation;