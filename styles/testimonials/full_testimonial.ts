import styled from "styled-components";

export const MainFullTestimonial = styled.main`
    .with-sidebar{
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
      article{
        margin: 0;
        padding: var(--spacer-m) 0;
        max-width: var(--content-width);
        position: relative;
        header{
          border-bottom: var(--border-intersection);
          margin-bottom: var(--spacer-m);
          padding-bottom: var(--spacer-m);
          position: relative;
          h1{
            font-size: var(--font-size-xxl);
            font-weight: 500;
            font-family: var(--font-family-heading);
            margin: 0;
          }
          figure{
            height: 2rem;
            position: absolute;
            right: var(--spacer-xxs);
            top: var(--spacer-xxs);
            width: 20rem;
            margin: 0;
            img{
              height: 100%;
              object-fit: contain;
              width: 100%;
            }
          }
          time{
            display: block;
            font-size: var(--font-size-large);
            font-weight: 700;
            margin: var(--spacer-m) 0;
          }
          .subject{
            font-size: var(--font-size-xl);
            font-weight: 700;
            a{
              text-decoration: none;
              color: var(--link-color);
              transition: color .125s;
              &:hover{
                color: var(--link-color-hover);
              }
            }
          }
          .author{
            font-size: var(--font-size-large);
            font-weight: 700;
          }
        }
        .text{
          p{
            line-height: calc(15/8);
          }
        }
        footer{
          figure{
            margin: var(--spacer-m) auto;
            .image{
              background: var(--main-color-a-shade);
              height: 40rem;
              img{
                height: 100%;
                object-fit: contain;
                width: 100%;
              }
            }
          }
          figcaption{
            border-left: var(--border-highlight);
            font-size: var(--font-size-decreased);
            font-weight: 100;
            padding: var(--spacer-xxs) var(--spacer-xs);
          }
        }
      }
      aside{
        grid-column: 2;
        grid-row: 1/-1;
        padding: var(--spacer-s) 0;
        .posts__sidebar{
          grid-column: 1/-1;
          ul{
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