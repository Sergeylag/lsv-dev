import styled from "styled-components";

export const AboutInfo = styled.section`
  h2 {
    font-size: var(--font-size-xl);
    font-weight: 500;
    line-height: 1.167;
    font-family: var(--font-family-heading);
    margin: 0;
  }

  p {
    line-height: 1.286;
  }
  ul{
    display: grid;
    gap: var(--spacer-m) 0;
    grid-template-columns: 1fr 1fr 1fr;
    -webkit-hyphens: auto;
    hyphens: auto;
    list-style: none;
    margin: var(--spacer-m) auto;
    padding: 0;
    li{
      border-bottom: 0.1rem dotted var(--main-color-b-1);
      padding: var(--spacer-m) var(--spacer-xs);
      p{
        line-height: calc(7/6);
        margin: 0;
        max-width: 20rem;
      }
      figure{
        color: var(--main-color-b-1);
        max-width: 20rem;
        margin: 0;
        .image{
          aspect-ratio: 1;
          display: flex;
          width: 7.5rem;
          img{
            height: 100%;
            object-fit: contain;
            width: 100%;
          }
        }
        figcaption{
          font-size: var(--font-size-xl);
          font-weight: 400;
          line-height: calc(7/6);
          .number{
            font-size: var(--font-size-xxl);
            font-weight: 700;
            line-height: calc(51/44);
          }
        }
      }
    }
  }
`;