import styled from "styled-components";

export const Navigations = styled.nav`
  margin: 0 auto;
  max-width: var(--content-width);
  position: relative;
  background: var(--main-color-b-1);
  color: var(--text-color-inverted-primary);
  input {
    display: none;
    border: none;
    clip: rect(0 0 0 0);
    height: auto;
    left: -10000rem;
    margin: 0;
    opacity: .05;
    overflow: hidden;
    padding: 0;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    font-size: inherit;
  }
  input[type="checkbox" i] {
    background-color: initial;
    cursor: default;
    appearance: auto;
    box-sizing: border-box;
    margin: 3px 3px 3px 4px;
    padding: initial;
    border: initial;
  }
  label {
    align-items: center;
    cursor: pointer;
    display: none;
    flex-direction: column;
    height: 3.2rem;
    padding: 0.4rem;
    width: 3.2rem;
  }
  .morphing-hamburger span {
    background: #fff;
    border-radius: 0.2rem;
    display: block;
    height: 0.4rem;
    margin: 0 auto;
    transition: .5s;
    transform-origin: center;
    width: 2.4rem;
  }
  .hamburger-morpher:not(:checked)~.morphing-hamburger .a {
    transform: translate(0, 0.2rem);
  }
  .morphing-hamburger .b {
    transform: translate(0, 0.6rem);
  }
  .hamburger-morpher:not(:checked)~.morphing-hamburger .c {
    transform: translate(0, 1rem);
  }
`