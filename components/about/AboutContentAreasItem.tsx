import React from 'react';
import styled from "styled-components";
import monitor from "../../public/img/about/about_content_areas/monitor.svg";

const AboutContentAreasItem = ({color,src,text1,strong,text2}, id) => {
    const Li = styled.li`
      background-color: ${color};
    `;

    return (
        <Li key={id}>
            <figure>
                <img alt="" src={src}/>
            </figure>
            <p>{text1} <strong>{strong}</strong> {text2}</p>
        </Li>
    );
};

export default AboutContentAreasItem;