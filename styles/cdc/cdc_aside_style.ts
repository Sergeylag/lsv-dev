import styled from "styled-components";

export const CdcAsideStyle = styled.div`
  max-width: 80rem;

  .phone {
    color: var(--text-color-inverted-primary);
    @media (max-width: 768px) {
      font-size: var(--font-size-xl);
    }
  }

  .address {
    color: var(--text-color-inverted-primary);
    margin: var(--spacer-xs) 0 var(--spacer-s);
  }

  .altered {
    --button-ghost-color: var(--text-color-inverted-primary);
    --button-ghost-bg-hover: var(--text-color-inverted-primary);
    --button-ghost-color-hover: var(--main-color-b-3);
    padding: var(--spacer-xs) var(--spacer-s);
    background: var(--button-ghost-bg);
    border-color: var(--button-ghost-color);
    color: var(--button-ghost-color);
    border: 0.1rem solid;
    border-radius: 0.4rem;
    cursor: pointer;
    font-family: var(--font-family-main);
    font-size: inherit;
    display: inline-block;
    margin: 0;
    text-align: center;
    text-decoration: none;
    transition: .25s;

    &:hover, &:active {
      background: var(--button-ghost-bg-hover);
      border-color: var(--button-ghost-bg-hover);
      color: var(--button-ghost-color-hover);
      text-decoration: none;
    }

  }
`;