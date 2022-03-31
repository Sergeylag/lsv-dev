import {createGlobalStyle} from "styled-components";

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
    @media (max-width: 640px) {
      --font-size-xxl: 4.2rem;
      --font-size-xl: 2.9rem;
    }
    @media (max-width: 600px) {
      --font-size-xxl: 4rem;
      --font-size-xl: 2.8rem;
    }
    @media (max-width: 480px) {
      --font-size-xxl: 3.8rem;
      --font-size-xl: 2.5rem;
    }
    @media (max-width: 414px) {
      --font-size-xxl: 3.6rem;
      --font-size-xl: 2.4rem;
    }
  }

  body {
    font-size: var(--font-size-normal);
    margin: 0;
    min-width: var(--content-width-min);
    padding: 0;
    font-family: Roboto, sans-serif;
  }

  html {
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
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 40px;
  }

  .logo-gkb {
    vertical-align: middle;
    border: 0;
    display: block;
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 1440px) {
    html {
      font-size: 11px;
    }
  }

  @media (min-width: 1600px) {
    html {
      font-size: 12px;
    }
  }

  @media (min-width: 1920px) {
    html {
      font-size: 14px;
    }
  }
`