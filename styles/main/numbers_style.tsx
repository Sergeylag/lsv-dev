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
          @media (max-width: 640px){
            align-items: center;
            display: flex;
            max-width: 100%;
          }
        }
        
        figcaption {
          @media (max-width: 640px){
            align-items: flex-end;
            display: flex;
          }
        }
        @media (max-width: 640px){
          align-items: center;
          display: flex;
          max-width: 100%;
        }
      }
      .number{
        font: 700 var(--font-size-xl)/1.5 var(--font-family-heading);
        @media (max-width: 640px){
          line-height: normal;
          margin-right: var(--spacer-xs);
        }
      }
      .primary{
        font-size: var(--font-size-large);
        @media (max-width: 640px){
          margin-right: var(--spacer-xs);
        }
      }
      .secondary{
        color: var(--text-color-primary);
        font-size: var(--font-size-decreased);
      }
    }
    @media (max-width: 902px){
      grid-gap: var(--spacer-s);
      padding: 0 var(--spacer-s);
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 640px){
      justify-items: start;
      grid-template-columns: 1fr;
    }
    @media (max-width: 414px){
      padding: 0 var(--spacer-xs);
    }
  }
`;