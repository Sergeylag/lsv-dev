import styled from "styled-components";

export const PlugVisitorsContent = styled.div`
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
  .content__show{
    margin: 0;
    max-width: var(--content-width);
    padding: var(--spacer-s) 0 var(--spacer-m);
    position: relative;
    h1{
      font-size: var(--font-size-xxl);
      font-weight: 500;
      font-family: var(--font-family-heading);
      margin: 0;
    }
    p{
      line-height: 1.286;
    }
    figure{
      margin: 0;
      .image{
        img{
          width: 100%;
        }
      }
    }
  }
  .sidebar{
    grid-column: 2;
    grid-row: 1/-1;
    padding: var(--spacer-s) 0;
  }
`;