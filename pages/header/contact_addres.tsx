import React from 'react';
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
`

const ContactAddres = () => {
    return (
        <Addres>
            <div>127206, Москва, ул. Вучетича, 21</div>
            <a href='/'>Схема проезда</a>
        </Addres>
    );
};

export default ContactAddres;