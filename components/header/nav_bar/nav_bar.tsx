import React from 'react';
import styled from "styled-components";
import Nav from "./nav";

const SectionNavBar = styled.section`
  background: var(--main-color-b-1);
  color: var(--text-color-inverted-primary);
`
export default function NavBar () {
    return (
        <SectionNavBar className="header-navigation">
            <Nav/>
        </SectionNavBar>
    );
};
