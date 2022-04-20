import styled from "styled-components";
import checked from '../../public/img/testimonials/checked.svg'
import down from '../../public/img/testimonials/down.svg'
import search from '../../public/img/testimonials/search.svg'

export const MainNewTestiminial = styled.main`
  .with-sidebar {
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

    article {
      margin: 0;
      max-width: var(--content-width);
      padding: var(--spacer-s) 0 var(--spacer-m);
      position: relative;

      h1 {
        font-size: var(--font-size-xxl);
        font-weight: 500;
        font-family: var(--font-family-heading);
        margin: 0;
      }

      .feedback__testimonials-form {
        --form-input-bg: var(--bg-card);
        --input-border: #d1d1d1;
        max-width: 100%;
        width: 57rem;
        margin: 0;
        padding: 0;
        dl{
          display: grid;
          gap: var(--spacer-m);
          grid-auto-rows: auto;
          grid-template-columns: repeat(2, 1fr);
          .wide{
            grid-column: 1/-1;
          }
          dt{
            font-size: var(--font-size-decreased);
            font-weight: 500;
          }
          dd{
            margin: 0;
            .input-text {
              border-radius: 1.2rem;
              padding: var(--spacer-xs) var(--spacer-s);
              width: 100%;
              background-color: var(--form-input-bg);
              border: 0.1rem solid var(--input-border);
              font-size: var(--font-size-normal);
              margin: 0;
              &:focus{
                border-color: var(--input-border-focus);
                box-shadow: 0.1rem 0.1rem 0.2rem var(--input-border-focus);
                outline: none;
              }
            }
            input:not([type=checkbox]):not([type=radio]) {
              min-width: 1ch;
            }
          }
          .search-and-select{
            align-items: center;
            background: var(--form-input-bg);
            border: 0.1rem solid var(--input-border);
            border-radius: 1.2rem;
            display: flex;
            font-size: var(--font-size-normal);
            select{
              -webkit-appearance: none;
              appearance: none;
              background: transparent url("${down.src}") no-repeat center right var(--spacer-xs);
              border-radius: 0;
              border: none;
              display: block;
              flex: none;
              font-size: inherit;
              margin: 0;
              padding: var(--spacer-xs) 3.2rem var(--spacer-xs) var(--spacer-s);
              &:focus{
                box-shadow: 0.1rem 0.1rem 0.2rem var(--input-border-focus);
                outline: none;
              }
              
            }
            input{
              -webkit-appearance: none;
              appearance: none;
              background: transparent url("${search.src}") no-repeat center right var(--spacer-xs);
              border: none;
              border-left: 0.1rem solid var(--input-border);
              flex: 1;
              font-size: inherit;
              line-height: 1;
              margin: 0;
              padding: var(--spacer-xs) var(--spacer-s);
              &:focus{
                box-shadow: 0.1rem 0.1rem 0.2rem var(--input-border-focus);
                outline: none;
              }
            }
            input:not([type=checkbox]):not([type=radio]) {
              min-width: 1ch;
            }
          }
        }
        .consent{
          margin: var(--spacer-m) 0;
          .flag-label{
            align-items: flex-start;
            display: inline-flex;
            gap: var(--spacer-xxs);
            input{
              -moz-appearance: none;
              -webkit-appearance: none;
              appearance: none;
              border: 0.2rem solid var(--form-control-color);
              border-radius: 0.2rem;
              display: inline-block;
              height: 1.6rem;
              outline: none;
              width: 1.6rem;
              font-size: inherit;
            }
            input[type=checkbox]:checked{
              background: url("${checked.src}") no-repeat center/cover;
              border: none;
            }
            input[type="checkbox" i]:focus-visible {
              outline-offset: 2px;
            }
            span{
              cursor: pointer;
              flex: 1;
              padding-top: 0.1rem;
              a{
                text-decoration: underline;
                color: var(--link-color);
                transition: color .125s;
                &:hover{
                  color: var(--link-color-hover);
                  text-decoration: underline;
                }
              }
            }
          }
        }

        .buttons {
          button {
            border: none;
            padding: var(--spacer-xs) var(--spacer-s);
            background: var(--button-secondary-bg);
            color: var(--button-secondary-color);
            border-radius: 0.4rem;
            cursor: pointer;
            font-family: var(--font-family-main);
            font-size: inherit;
            display: inline-block;
            margin: 0;
            text-align: center;
            text-decoration: none;
            transition: .25s;
            &:hover{
              background: var(--button-secondary-bg-hover);
              border-color: var(--button-secondary-bg-hover);
              color: var(--button-secondary-color-hover);
              text-decoration: none;
          }
        }
      }
    }
  }

  aside {
    grid-column: 2;
    grid-row: 1/-1;
    padding: var(--spacer-s) 0;

    .posts__sidebar {
      grid-column: 1/-1;

      ul {
        margin: 0 auto;
        display: grid;
        gap: var(--spacer-m);
        grid-auto-rows: auto;
        grid-template-columns: repeat(auto-fill, minmax(var(--card-size, 22rem), 1fr));
        list-style: none;
        padding: 0;
      }
    }
  }
}
`;