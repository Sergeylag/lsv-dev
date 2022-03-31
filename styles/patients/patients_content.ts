import styled from "styled-components";

export const PatientsContentWrapper = styled.article`
  padding-left: var(--spacer-xs);
  padding-right: var(--spacer-xs);
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: var(--content-width);
  h1{
    font-size: var(--font-size-xxl);
    font-family: var(--font-family-heading);
    margin: 0;
  }
  p{
    line-height: 1.286;
    em{
      font-style: italic;
    }
  }
  figure{
    margin: 0;
    img{
      width: 100%;
    }
  }
`;