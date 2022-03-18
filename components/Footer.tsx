import styled from "styled-components";

const Basement = styled.p`
width: 100%;
border: 1px solid red;
`

const Footer = () => {
    return (
        <footer>
            <Basement>Подвал страницы</Basement>
        </footer>
    );
};

export default Footer;