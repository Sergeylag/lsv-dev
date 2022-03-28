import styled from "styled-components";

export const MainDepartments = styled.section`
  padding: var(--spacer-m) 0;
  h2{
    text-align: center;
    font: 500 var(--font-size-xl) var(--font-family-heading);
    margin: 0;
  }
  .content-wrapper{
    padding-left: var(--spacer-xs);
    padding-right: var(--spacer-xs);
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);
    ul{
      display: grid;
      gap: var(--spacer-m);
      grid-auto-rows: auto;
      grid-template-columns: repeat(auto-fill, minmax(var(--card-size, 22rem), 1fr));
      list-style: none;
      margin: var(--spacer-m) auto 0;
      padding: 0;
    }
  }
`;