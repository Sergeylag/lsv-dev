import styled from "styled-components";
import paperclip from '../../../public/img/main/chief/paperclip.svg'
import checked from '../../../public/img/main/chief/checked.svg'
export const PlugAppointmentMain = styled.main`
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
        max-width: var(--content-width);
        padding: var(--spacer-s) 0 var(--spacer-m);
        position: relative;
        h1{
          font-size: var(--font-size-xxl);
          font-weight: 500;
          font-family: var(--font-family-heading);
          margin: 0;
        }
        header{
          border-bottom: var(--border-intersection);
          margin-bottom: var(--spacer-m);
          padding: var(--spacer-s) 0 var(--spacer-m);
          figure{
            display: grid;
            gap: var(--spacer-s);
            grid-template-columns: 15rem auto;
            max-width: 50rem;
            margin-top: var(--spacer-s) 0 0 0 ;
            .image{
              border-radius: 50%;
              box-shadow: var(--block-shadow);
              height: 15rem;
              overflow: hidden;
              width: 15rem;
              img{
                height: 100%;
                object-fit: cover;
                width: 100%;
              }
            }
            figcaption{
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 0 0 var(--spacer-s);
              .name{
                font-size: var(--font-size-large);
                font-weight: 700;
                margin: var(--spacer-s) 0;
              }
              .title{

              }
            }
          }
          blockquote{
            font-style: italic;
            font-weight: 700;
            margin: var(--spacer-s) 0 0;
            max-width: 57rem;
            p{
              border-left: var(--border-highlight);
              margin: 0;
              padding-left: var(--spacer-s);
              line-height: 1.286;
            }
          }
        }
        form{
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
              input{
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
              textarea{
                border-radius: 1.2rem;
                padding: var(--spacer-xs) var(--spacer-s);
                width: 100%;
                background-color: var(--form-input-bg);
                border: 0.1rem solid var(--input-border);
                font-size: var(--font-size-normal);
                margin: 0;
              }
            }
          }
        }
        .file-label{
          grid-column: 1/-1;
          align-items: center;
          background: url("${paperclip.src}") no-repeat center left var(--spacer-xxs)/contain;
          cursor: pointer;
          display: flex;
          padding: var(--spacer-xxs) 0 var(--spacer-xxs) 3.2rem;
          input{
            border: none;
            clip: rect(0 0 0 0);
            height: auto;
            left: -10000rem;
            margin: 0;
            opacity: .05;
            overflow: hidden;
            padding: 0;
            pointer-events: none;
            position: absolute;
            white-space: nowrap;
            width: 1px;
            font-size: inherit;
          }
          span{
            color: var(--link-color);
            text-decoration: underline;
          }
        }
        .consent{
          margin: var(--spacer-m) 0;
          label{
            align-items: flex-start;
            display: inline-flex;
            gap: var(--spacer-xxs);
            input{
              appearance: none;
              border: 0.2rem solid var(--form-control-color);
              border-radius: 0.2rem;
              display: inline-block;
              height: 1.6rem;
              outline: none;
              width: 2rem;
              &:focus{
                box-shadow: 0.2rem 0.2rem 0.2rem var(--input-border-focus);
              }

            }
            input[type=checkbox]:checked {
              background: url("${checked.src}") no-repeat center/cover;
              border: none;
            }
            span{
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
        .buttons{
          button{
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
      .sidebar{
        padding: var(--spacer-s) 0;
        grid-column: 2;
        grid-row: 1/-1;
      }
    }
`;