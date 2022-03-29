import styled from "styled-components";
import survey from '../../public/img/main/feedback/survey.svg'


export const MainFeedback = styled.section`
  padding: var(--spacer-m) 0 0;
  .content-wrapper {
    padding-left: var(--spacer-xs);
    padding-right: var(--spacer-xs);
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);
    h2{
      font: 500 var(--font-size-xl) var(--font-family-heading);
      text-align: center;
      margin: 0;
    }
    ul{
      list-style: none;
      margin: var(--spacer-m) auto;
      max-width: 64rem;
      padding: 0;
      li{
        margin: 0 0 var(--spacer-s);
        padding: 0;
        a{
          background: var(--bg-secondary) url("${survey.src}") no-repeat center left var(--spacer-xs)/2.4rem 2.4rem;
          border-radius: var(--spacer-xxs);
          box-shadow: var(--block-shadow);
          display: block;
          padding: var(--spacer-s) var(--spacer-s) var(--spacer-s) var(--spacer-l);
          text-decoration: underline;
          color: var(--link-color);
          transition: color .125s;
          &:hover{
            color: var(--link-color-hover);
            text-decoration: underline;
          }
          &:active {
            color: var(--link-color-active);
          }
        }
      }
    }
  }
`;