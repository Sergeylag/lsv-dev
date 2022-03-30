import React from 'react';
import {AboutAreas} from "../../styles/about/about_areas";
import {AboutContentAreasList} from "./about_content_areas_list";
import AboutContentAreasItem from "./AboutContentAreasItem";

const AboutContentAreas = () => {
    return (
        <AboutAreas>
            <h2>Приоритетные направления работы стационара</h2>
            <ul>
                {AboutContentAreasList.map((e,id)=>{
                    return(AboutContentAreasItem(e,id))
                })}
            </ul>
        </AboutAreas>
    );
};

export default AboutContentAreas;