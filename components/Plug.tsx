import React from 'react';
import styled from "styled-components";
import Heading from "./Heading";

const PlugContent = styled.div`
  width: 50%;
  margin: 0 auto;
`
export default function Plug() {
    return (
        <PlugContent>
            <Heading tag='' text='Sorry... This page is under construction'/>
        </PlugContent>
    );
};

Plug;