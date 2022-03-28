import styled from "styled-components";

export const MainNews = styled.section`
  background: var(--bg-secondary);
  padding: var(--spacer-m) 0;

  .content-wrapper {
    padding-left: var(--spacer-xs);
    padding-right: var(--spacer-xs);
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);

    h2 {
      text-align: center;
      font: 500 var(--font-size-xl) var(--font-family-heading);
      margin: 0;
    }

    .posts__list {
      display: grid;
      gap: var(--spacer-m);
      grid-auto-rows: auto;
      grid-template-columns: repeat(auto-fill, minmax(var(--card-size, 22rem), 1fr));
      list-style: none;
      margin: var(--spacer-m) auto 0;
      padding: 0;
    }

    nav {
      margin-top: var(--spacer-m);
      text-align: center;

      a {
        border: none;
        padding: var(--spacer-xs) var(--spacer-s);
        background: var(--button-secondary-bg);
        color: var(--button-secondary-color);
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
          background: var(--button-secondary-bg-hover);
          border-color: var(--button-secondary-bg-hover);
          color: var(--button-secondary-color-hover);
          text-decoration: none;
        }
      }
    }
  }
`;