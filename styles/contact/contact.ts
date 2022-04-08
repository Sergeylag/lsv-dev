import styled from "styled-components";

export const ContactMain = styled.main`
  .with-sidebar {
    display: grid;
    gap: var(--spacer-m);
    grid-auto-rows: auto;
    grid-template-columns: calc(100% - 24rem - var(--spacer-m)) 24rem;
    padding-left: var(--spacer-xs);
    padding-right: var(--spacer-xs);
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);

    h1 {
      font-size: var(--font-size-xxl);
      font-family: var(--font-family-heading);
      margin: 0;
    }

    h2 {
      font-size: var(--font-size-xl);
      line-height: 1.167;
      font-family: var(--font-family-heading);
      margin: 0;
    }
    dl{
      div{
        margin: var(--spacer-xs) 0;
        dt{
          font-size: var(--font-size-large);
          font-weight: bold;
        }
        dd{
          margin: 0;
          padding: var(--spacer-xxs) 0;
        }
      }
  }
    ul{
      list-style: none;
      margin: 0;
      padding: 0;
      li{
        padding: var(--spacer-xxs) 0;
      }
    }
    a{
      color: var(--link-color);
      text-decoration: none;
      transition: color .125s;
      &:hover{
        color: var(--link-color-hover);
      }
    }
}
`;