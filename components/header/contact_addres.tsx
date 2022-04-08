import React from 'react';
import Link from 'next/link'
import styled from "styled-components";
import geo from '../../public/icons/geo.svg'

const Addres = styled.div`
  background: url('${geo.src}') no-repeat top var(--spacer-s) left/2.1rem auto;
  padding: var(--spacer-s) 0 var(--spacer-s) 2.6rem;

  a {
    text-decoration: underline;
    color: var(--link-color);
    transition: color .125s;
  }
  @media(max-width: 900px){
    background-position-y: top;
    padding-bottom: 0;
    padding-top: 0;
  }
`

const ContactAddres = () => {
    return (
        <Addres>
            <div>127206, Москва, ул. Вучетича, 21</div>
            <Link href='/contact'>
                <a>Схема проезда</a>
            </Link>
        </Addres>
    );
};

export default ContactAddres;