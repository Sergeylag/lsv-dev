import styled from "styled-components";

export const MainNumbers = styled.section`
  color: var(--main-color-a);
  padding: var(--spacer-m) 0;
  ul{
    display: grid;
    grid-auto-rows: auto;
    grid-gap: var(--spacer-m);
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    list-style: none;
    margin: 0 auto;
    max-width: var(--content-width);
    padding: 0 var(--spacer-m);
    li{
      margin: 0;
      padding: 0;
      figure{
        max-width: 18rem;
        .image{
          height: 4rem;
          width: 4rem;
          img{
            height: 100%;
            object-fit: contain;
            width: 100%;
          }
        }
      }
      .number{
        font: 700 var(--font-size-xl)/1.5 var(--font-family-heading);
      }
      .primary{
        font-size: var(--font-size-large);
      }
      .secondary{
        color: var(--text-color-primary);
        font-size: var(--font-size-decreased);
      }
    }
  }
`;