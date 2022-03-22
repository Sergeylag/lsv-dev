import styled from "styled-components";

export const Basement = styled.footer`
  background: var(--main-color-b-4-shade);
  font-size: var(--font-size-decreased);
  padding: var(--spacer-m) 0 0;
  
  .content-wrapper{
    align-items: start;
    display: grid;
    grid-auto-rows: auto;
    grid-gap: var(--spacer-s);
    grid-template-columns: repeat(3, 1fr) auto;

    padding-left: var(--spacer-xs);
    padding-right: var(--spacer-xs);
    position: relative;

    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);
  }
  
  .logo{
    align-items: flex-start;
    display: flex;
    gap: var(--spacer-xs);
    margin: 0;
    //margin-block-start: 1em;
    //margin-block-end: 1em;
    //margin-inline-start: 40px;
    //margin-inline-end: 40px;
    
    a{
      flex: none;
      width: 6rem;
      text-decoration: underline;
      color: var(--link-color);
      transition: color .125s;
    }
    img{
      height: 100%;
      object-fit: contain;
      width: 100%;
    }
    .copyright {
      color: var(--text-color-secondary);
      font-weight: 300;
      flex: 1;
      font-size: var(--font-size-small);
    }
  }
  .address{
    margin: 0;
  }
  .chief{
    color: var(--text-color-secondary);
    font-size: var(--font-size-small);
    font-weight: 300;
    line-height: 1.286;
    em{
      font-style: normal;
      font-weight: 400;
    }
  }
  .search{
    p{
      line-height: 1.286;
      a{
        text-decoration: underline;
        color: var(--link-color);
        transition: color .125s;
      }
    }
    .phone{
      color: var(--text-color-primary);
      font-size: var(--font-size-increased);
      font-weight: 700;
      margin: 0;
      a{
        text-decoration: none;
        color: inherit;
      }
    }
  }
  .social{
    h4{
      margin: 0;
      margin-bottom: var(--spacer-xxs);
      font-family: var(--font-family-heading);
    }
  }
  .legal{
    background: var(--main-color-b-4-shade);
    margin-top: var(--spacer-s);
    padding: var(--spacer-s) 0;
    a{
      text-decoration: underline;
      color: var(--link-color);
      transition: color .125s;
    }
  }
  @media(max-width: 900px){
    .content-wrapper {
      grid-template-columns: 1fr 1fr;
    }
  }
  
`
