import React from 'react';
import Link from 'next/link';
import styled from "styled-components";
// import About from "./about";

const Toggle = styled.ul`
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: .25s;
  li {
    margin: 0;
    padding: 0;
    position: relative;
    display: list-item;
    text-align: -webkit-match-parent;
  }
  a {
    color: inherit;
    display: block;
    padding: var(--spacer-s) var(--spacer-xs);
    text-decoration: none;
    cursor: pointer;
    transition: color .125s;
  }
  li ul {
    background: var(--main-color-a);
    box-shadow: var(--block-shadow);
    visibility: hidden;
    //left: 50%;
    pointer-events: none;
    position: absolute;
    top: 100%;
    transition: transform .25s, opacity .25s;
    transform: scaleY(0) translateX(-50%);
    //transform: scaleY(0) ;
    transform-origin: top center;
    width: 28rem;
    //z-index: 10;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
  }
  li:hover > ul, li ul:hover, li ul li:hover, li ul li a:hover {
    transform: scaleY(1) ;
    visibility: visible;
    pointer-events: auto;
  }
  
  li ul li {
    display: list-item;
    text-align: -webkit-match-parent;
  }
  li ul li:not(:last-of-type) {
    border-bottom: 0.1rem solid var(--text-color-inverted-secondary);
  }
  li ul li a {
    color: inherit;
    display: block;
    padding: var(--spacer-s) var(--spacer-xs);
    //-webkit-text-decoration: none;
    text-decoration: none;
    cursor: pointer;
    //-webkit-transition: color .125s;
    transition: color .125s;
  }
`

export default function NavToggle() {
    return (
        <Toggle>
            <li>
                <Link href="/">
                    <a>Главная</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>О больнице</a>
                </Link>
                {/*<About/>*/}
            </li>
            {/*<li>*/}
            {/*    <a href="/patients">Пациентам</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <a href="/cdc">Службы и отделения</a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <span>Платные услуги</span>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <span>Пресс-центр</span>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*    <a href="/contact">Контакты</a>*/}
            {/*</li>*/}
        </Toggle>
    );
};
