import styled from "styled-components";

export const HospitalDepartmentCartWrapper = styled.article`
  //padding-left: var(--spacer-xs);
  //padding-right: var(--spacer-xs);
  position: relative;
  margin: var(--spacer-m) auto;
  max-width: var(--content-width);
  padding: 0 var(--spacer-xs);
  
  header{
    h1{
      font-size: var(--font-size-xxl);
      font-family: var(--font-family-heading);
      margin: 0;
    }
    .section-nav{
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacer-m);
      margin: var(--spacer-m) auto;
      a{
        text-decoration: underline;
        color: var(--link-color);
        transition: color .125s;
      }
    }
  }
  
  .section-image{
    align-items: center;
    display: flex;
    margin: var(--spacer-m) auto;
    min-height: 27rem;
    padding: var(--spacer-m) var(--spacer-xl);
    //.text{
    //  max-width: 80rem;
    //  .phone{
    //    color: var(--text-color-inverted-primary);
    //    font-size: var(--font-size-xxl);
    //  }
    //  .assress{
    //    color: var(--text-color-inverted-primary);
    //    margin: var(--spacer-xs) 0 var(--spacer-s);
    //  }
    //}
  }
`;