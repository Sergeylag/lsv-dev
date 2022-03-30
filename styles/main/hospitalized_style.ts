import styled from "styled-components";

export const MainHospitalized = styled.aside`
  background: var(--main-color-b-4-shade);
  font-size: var(--font-size-xl);
  font-weight: 700;
  div{
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: var(--spacer-s);
    max-width: 70rem;
    padding-left: var(--spacer-xs);
    padding-right: var(--spacer-xs);
    position: relative;
    margin-left: auto;
    margin-right: auto;
    .image{
      margin: 0;
      bottom: 0;
      left: 0;
      height: 100%;
      mix-blend-mode: darken;
      position: absolute;
      top: 0;
      transform: translateX(-10rem);
      img{
        height: 100%;
        object-fit: contain;
        width: 100%;
        max-width: 75% !important;
      }
      @media(max-width: 860px){
        left: 8rem;
      }
    }
    p{
      margin-left: 12rem;
      line-height: 1.286;
      a{
        text-decoration: underline;
        color: var(--link-color);
        transition: color .125s;
        &:hover{
          color: var(--link-color-hover);
          text-decoration: underline;
        }
      }
      @media(max-width: 830px){
        margin-left: 9rem;
      }
      @media(max-width: 760px){
        margin-left: 10rem;
        font-size: var(--font-size-large);
      }
    }
  }
`;