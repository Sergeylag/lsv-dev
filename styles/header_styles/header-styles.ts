import styled, {createGlobalStyle} from "styled-components";
import eye from '../../public/icons/eye.svg'
import search from '../../public/icons/search.svg'
import envelope from '../../public/icons/envelope.svg'

export const Appoitment = styled.a`
  width: 100%;
  border: none;
  padding: var(--spacer-xs) var(--spacer-s);
  background: var(--button-primary-bg);
  //border-color: var(--button-primary-bg);
  color: var(--button-primary-color);
  border-radius: 0.4rem;
  cursor: pointer;
  font-family: var(--font-family-main);
  font-size: inherit;
  display: inline-block;
  margin: 0;
  text-align: center;
  text-decoration: none;
  transition: .25s;
  &:hover {
    background: var(--button-primary-bg-hover);
    border-color: var(--button-primary-bg-hover);
    color: var(--button-primary-color-hover);
    text-decoration: none;
  }
`;

export const CallCen = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li:not(:last-of-type) {
    margin-bottom: var(--spacer-xs);
  }
  a[href^=tel]:not(:focus) {
    text-decoration: none;
  }
  a {
    color: inherit;
    display: block;
    font-size: var(--font-size-increased);
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
  }
`;

export const LogoGkb = styled.figure`
  width: 20rem;
  a{
    text-decoration: underline;
    color: var(--link-color);
    transition: color .125s;
    cursor: pointer;
  }
`;

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
  padding-top: 0.8rem;
`;

export const Stripe2 = styled.section`
  padding: var(--spacer-xs);
  align-items: center;
  display: grid;
  gap: 0 var(--spacer-s);
  grid-template-rows: auto;
  grid-template-columns: 27% auto 27% 20rem;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--content-width);
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
  //@media (max-width: 1340px) {
  //  grid-auto-flow: column;
  //  grid-template-rows: auto auto;
  //  grid-template-columns: 1fr 1fr;
  //}
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
  :root {
    --form-control-color: #8fafef;
    --form-field-error: #f00;
    --form-input-bg: #fff;

    --button-primary-bg: #eb5656;
    --button-primary-bg-hover: #d71919;
    --button-primary-color: #fff;
    --button-primary-color-hover: #fff;
    --button-ghost-bg: transparent;
    --button-ghost-bg-hover: #f66060;
    --button-ghost-color: #df2020;
    --button-ghost-color-hover: #fff;
    --button-secondary-bg: #6ca7da;
    --button-secondary-bg-hover: #317fc4;
    --button-secondary-color: #fff;
    --button-secondary-color-hover: #fff;
    --button-save-bg: #70a970;
    --button-save-bg-hover: #305030;
    --button-save-color: #fff;
    --button-save-color-hover: #fff;
    --button-danger-bg: #c65353;
    --button-danger-bg-hover: #9f6060;
    --button-danger-color: #fff;
    --button-danger-color-hover: #fff;

    --main-color-a-1: #eb5656;
    --main-color-a-2: #d71919;
    --main-color-b-1: #6ca7da;
    --main-color-b-2: #317fc4;
    --main-color-b-3: #0071bd;
    --main-color-b-4: #aeccea;
    --main-color-b-4-shade: rgba(174, 204, 234, 0.3);
    --main-color-b-4-shade-1: rgba(174, 204, 234, 0.2);
    --main-color-a: #6EAADC;
    --main-color-a-a: #ADCCEA;
    --main-color-b: #E44C4C;
    --main-color-c: #383838;
    --main-color-a-shade: hsla(210, 59%, 80%, .2);
    --main-color-b-shade: hsla(0, 67%, 89%, .25);
    --banner-shade: hsla(210, 59%, 80%, .3);
    --bg-primary: #fff;
    --bg-secondary: #f5f4f9;
    --bg-card: #fafafa;
    --bg-shader-primary: rgba(173, 204, 234, .3);
    --bg-shader-secondary: hsla(207, 50%, 86%, .125);
    --bg-shader-heading: rgba(0, 0, 0, .25);
    --bg-footer: var(--bg-shader-primary);
    --border-card-inner: .1rem solid rgba(0, 0, 0, .12);
    --border-intersection: .1rem dotted var(--main-color-b-1);
    --border-highlight: var(--spacer-xs) solid var(--main-color-b-4);
    --block-shadow-hover: .1rem .2rem .2rem rgba(0, 0, 0, .25), .1rem .2rem .5rem .2rem rgba(0, 0, 0, .125);
    --block-shadow-card: 0 .4rem .4rem rgba(0, 0, 0, .25);
    --block-shadow-card-hover: 0 .4rem .4rem rgba(0, 0, 0, .25), 0 1.5rem 1.2rem rgba(0, 0, 0, .22), 0 1.9rem 3.8rem rgba(0, 0, 0, .38);
    --text-shadow-primary: .1rem .1rem .2rem rgba(0, 0, 0, .75);
    --text-color-form-contol: rgba(0, 0, 0, .38);
    --text-color-tag: rgba(0, 0, 0, .3);

    --font-size-xxxl: 5.6rem;
    --font-size-xxl: 4.5rem;
    --font-size-xl: 3rem;
    --font-size-large: 2.4rem;
    --font-size-increased: 1.8rem;
    --font-size-normal: 1.6rem;
    --font-size-decreased: 1.4rem;
    --font-size-small: 1.1rem;
    --font-size-xs: 1rem;
    --font-family-main: Roboto, sans-serif;
    --font-family-heading: Roboto, sans-serif;
    --spacer-s: 1.6rem;
    --spacer-xxxs: .2rem;
    --spacer-xxs: calc(var(--spacer-s) / 4);
    --spacer-xs: calc(var(--spacer-s) / 2);
    --spacer-m: calc(var(--spacer-s) * 2);
    --spacer-l: calc(var(--spacer-s) * 3);
    --spacer-xl: calc(var(--spacer-s) * 4);
    --spacer-xxl: calc(var(--spacer-s) * 6);
    --text-color-primary: #1c1c1c;
    --text-color-secondary: #777;
    --text-color-heading: #000;
    --text-color-inverted-primary: #fff;
    --text-color-inverted-secondary: #aeccea;
    --text-color-inverted-heading: #eee;
    --border-color-primary: silver;
    --border-color-secondary: #e6e6e6;
    --border-primary: 0.1rem solid silver;
    --border-secondary: 0.1rem solid #e6e6e6;
    --block-shadow: 0.2rem 0.2rem 0.4rem 0.2rem rgba(0, 0, 0, 0.125);
    --link-color: #0071bd;
    --link-color-visited: #0071bd;
    --link-color-active: #E44C4C;
    --link-color-hover: #E44C4C;
    --content-width: 110rem;
    --content-width-min: 32rem;
    --input-border: #bfbfbf;
    --input-border-focus: gray;
    --input-border-invalid: #df2020;
    --input-border-invalid-focus: #bf4040;
    --layout-bg-body: #f4f4f4 linear-gradient(to top, #f4f4f4, #dfdedc) no-repeat center/cover;
    --layout-bg-footer: #fff;
    --layout-bg-header: #fff;
    --layout-bg-main: #fff;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    min-width: 32rem;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
  
  html{
    color: var(--text-color-primary);
    font: 400 10px var(--font-family-main);
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
  }
  
  figure {
    margin: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 40px;
    margin-inline-end: 40px;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }
  
  .logo-gkb {
    vertical-align: middle;
    border: 0;
    display: block;
    max-width: 100%;
    height: auto;
  }
`
// export const Head = styled.header`
//
// `;