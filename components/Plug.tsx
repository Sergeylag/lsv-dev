import React from 'react';
import styled from "styled-components";
import Heading from "./Heading";
import {useRouter} from "next/router";

const PlugContent = styled.div`
  width: 50%;
  margin: 0 auto;
`
export default function Plug() {
    const router = useRouter()
    const text = 'Sorry... This page (' + router.pathname + ') is under construction'
    return (
        <PlugContent>
            <Heading tag='' text={text}/>
        </PlugContent>
    );
};

Plug;