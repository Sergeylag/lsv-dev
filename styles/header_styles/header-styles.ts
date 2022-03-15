import styled, {createGlobalStyle} from "styled-components";
import eye from '../../public/icons/eye.svg'
import search from '../../public/icons/search.svg'
import envelope from '../../public/icons/envelope.svg'

export const ChiefA = styled.a`
  background: url("${envelope.src}") no-repeat center left/2.2rem auto;
  padding: 0.8rem 0 0.8rem 2.6rem;
  color: #0071bd;
  text-decoration: underline;
  font-size: 1.6rem;
`;

export const FloatingInput = styled.input`
  background: #fff url('${search.src}') no-repeat center left 0.8rem/1.2rem auto;
  border: none;
  border-radius: 1.2rem;
  font-size: 1.4rem;
  line-height: 2rem;
  width: 85%;
  min-width: 1ch;
  margin: 0;
  padding: 0.4rem 0;
  padding-left: 2.8rem;
  &:focus {
    outline: 0;
    box-shadow: 1px 1px 2px 0 grey;
}
`;

export const FloatingLabel = styled.label`
  transform: translateY(-0.8rem);
  width: 100%;
  display: inline-block;
  padding: 1.4rem 0 0 0;
  position: relative;
  cursor: default;
`;

export const A = styled.a`
  border-radius: 50%;
  display: flex;
  height: 2.4rem;
  width: 2.4rem;
  text-decoration: underline;
  color: #0071bd;
`;

export const Img = styled.img`
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

export const Stripe = styled.section`
  background: hsla(210, 59%, 80%, .3);
  padding: calc(1.6rem / 2) 0;
`;

export const ContentWraper = styled.div`
  padding-left: calc(1.6rem / 2);
  padding-right: calc(1.6rem / 2);
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 110rem;
  align-items: center;
  display: grid;
  gap: 0 1.6rem;
  grid-template-rows: auto;
  grid-template-columns: 27% auto 27% 20rem;
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 960px) {
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 1340px) {
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr 1fr;
  }
`;

export const EyeSight = styled.div`
  margin: 10px 0;
  background: url("${eye.src}") no-repeat center left/2.6rem auto;
  font-size: 1.8rem;
  padding-left: 3rem;
  box-sizing: border-box;
  @media (max-width: 960px) {
    font-size: 1.4rem;
  }
`;

export const ContactSocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  display: flex;
  gap: calc(1.6rem * 2);
  @media (max-width: 960px) {
    gap: 1.6rem;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: 1.6rem;
    margin: 0;
    min-width: 32rem;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
`
// export const Head = styled.header`
//
// `;