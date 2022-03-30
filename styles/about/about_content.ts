import styled from "styled-components";

export const AboutContentWrapper = styled.div`
  padding-left: var(--spacer-xs);
  padding-right: var(--spacer-xs);
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--content-width);
  display: grid;
  gap: var(--spacer-m);
  grid-auto-rows: auto;
  grid-template-columns: calc(100% - 24rem - var(--spacer-m)) 24rem;

  article {
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
  }

  @media (max-width: 800px) {
    display: block;
  }
`;