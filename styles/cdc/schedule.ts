import styled from "styled-components";

export const ScheduleMain = styled.main`
  .content-wrapper{
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
    h2 {
      font-size: var(--font-size-xl);
      line-height: 1.167;
      font-family: var(--font-family-heading);
      margin: 0;
    }
    figure{
      margin: 0;
      img{
        width: 100%;
      }
    }
  }
    
`;