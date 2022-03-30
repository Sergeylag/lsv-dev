import styled from "styled-components";

export const AboutAreas = styled.section`
  h2 {
    font-size: var(--font-size-xl);
    line-height: 1.167;
    font-weight: 500;font-family: var(--font-family-heading);
    margin: 0;
  }
  ul{
    color: var(--text-color-inverted-primary);
    display: grid;
    gap: var(--spacer-s);
    grid-template-columns: 1fr 1fr 1fr;
    -webkit-hyphens: auto;
    hyphens: auto;
    list-style: none;
    margin: var(--spacer-m) auto;
    padding: 0;
    li{
      padding: var(--spacer-m);
      p{
        margin: var(--spacer-m) 0 0;
        line-height: 1.286;
        strong{
          font-size: var(--font-size-increased);
        }
      }
      figure{
        margin: 0;
      }
    }
  }
`;