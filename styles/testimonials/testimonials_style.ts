import styled from "styled-components";

export const MainTestimonials = styled.section`
  padding: var(--spacer-m) 0;

  .content-wrapper {
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
      text-align: center;
      font: 500 var(--font-size-xl) var(--font-family-heading);
      margin: 0;
    }

    nav {
      text-align: center;

      .button-secondary {
        border: none;
        background: var(--button-secondary-bg);
        color: var(--button-secondary-color);
      }

      .button {
        padding: var(--spacer-xs) var(--spacer-s);
        border-radius: 0.4rem;
        cursor: pointer;
        font-family: var(--font-family-main);
        font-size: inherit;
        display: inline-block;
        margin: 0;
        text-align: center;
        text-decoration: none;
        transition: .25s;

        &:hover, &:focus {
          background: var(--button-secondary-bg-hover);
          border-color: var(--button-secondary-bg-hover);
          color: var(--button-secondary-color-hover);
          text-decoration: none;
        }
      }
    }

    ul {
      display: grid;
      grid-gap: var(--spacer-m);
      grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
      list-style: none;
      margin: var(--spacer-m) auto;
      padding: 0;

      li {
        margin: 0;
        padding: 0;

        .testimonials__preview {
          display: flex;
          flex-direction: column;
          height: 100%;

          .subject {
            font-size: var(--font-size-large);
            font-weight: 500;
            padding: var(--spacer-xxs);
          }

          .name {
            font-weight: 500;
            margin-bottom: var(--spacer-xxs);
            padding: 0 var(--spacer-xxs);
          }

          time {
            color: var(--text-color-secondary);
            display: block;
            font-size: var(--font-size-decreased);
            font-weight: 200;
            margin-top: auto;
            padding: var(--spacer-xs) var(--spacer-xxs);
          }

          .text {
            padding: var(--spacer-xs) 0;
            p{
              -webkit-box-orient: vertical;
              display: -webkit-box;
              -webkit-line-clamp: 5;
              margin: 0;
              overflow: hidden;
              line-height: 1.286;
            }
          }
          
          .link{
            a{
              display: block;
              padding: var(--spacer-xs) 0;
              color: var(--link-color);
              transition: color .125s;
              &:hover, &:active{
                color: var(--link-color-hover);
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`;