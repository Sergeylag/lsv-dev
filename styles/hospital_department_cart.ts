import styled from "styled-components";
import buttonLeft from '../public/img/carousel-left.svg'
import buttonRight from '../public/img/carousel-right.svg'

export const HospitalDepartmentCartWrapper = styled.article`
  //padding-left: var(--spacer-xs);
  //padding-right: var(--spacer-xs);
  position: relative;
  margin: var(--spacer-m) auto;
  max-width: var(--content-width);
  padding: 0 var(--spacer-xs);

  header {
    h1 {
      font-size: var(--font-size-xxl);
      font-family: var(--font-family-heading);
      margin: 0;
    }

    .section-nav {
      display: flex;
      flex-wrap: wrap;
      gap: var(--spacer-m);
      margin: var(--spacer-m) auto;

      a {
        text-decoration: underline;
        color: var(--link-color);
        transition: color .125s;
      }
    }
  }

  .section-image {
    align-items: center;
    display: flex;
    margin: var(--spacer-m) auto;
    min-height: 27rem;
    padding: var(--spacer-m) var(--spacer-xl);

    .text {
      max-width: 80rem;

      .phone {
        color: var(--text-color-inverted-primary);
        font-size: var(--font-size-xxl);
        @media (max-width: 768px) {
          font-size: var(--font-size-xl);
        }
      }
      
      .title{
        color: var(--text-color-inverted-primary);
        font-size: var(--font-size-xl);
        padding-bottom: 3rem;
      }

      .address {
        color: var(--text-color-inverted-primary);
        margin: var(--spacer-xs) 0 var(--spacer-s);
      }

      .altered {
        --button-ghost-color: var(--text-color-inverted-primary);
        --button-ghost-bg-hover: var(--text-color-inverted-primary);
        --button-ghost-color-hover: var(--main-color-b-3);
        padding: var(--spacer-xs) var(--spacer-s);
        background: var(--button-ghost-bg);
        border-color: var(--button-ghost-color);
        color: var(--button-ghost-color);
        border: 0.1rem solid;
        border-radius: 0.4rem;
        cursor: pointer;
        font-family: var(--font-family-main);
        font-size: inherit;
        display: inline-block;
        margin: 0;
        text-align: center;
        text-decoration: none;
        transition: .25s;

        &:hover, &:active {
          background: var(--button-ghost-bg-hover);
          border-color: var(--button-ghost-bg-hover);
          color: var(--button-ghost-color-hover);
          text-decoration: none;
        }
      }

      h3 {
        color: var(--main-color-b-3);
        font-size: var(--font-size-xl);
        font-family: var(--font-family-heading);
        margin: 0;
      }

      ul {
        column-count: 2;
        column-gap: var(--spacer-m);
        line-height: calc(15 / 8);
        margin: var(--spacer-s) 0;
        padding: 0 0 0 var(--spacer-m);
      }
    }
  }


  .department-info {
    display: grid;
    gap: var(--spacer-m);
    grid-template-columns: 34rem calc(100% - 32rem - var(--spacer-m));

    .department-brief {
      --figure-size: 16rem;

      header {
        h2 {
          margin: 0 0 var(--spacer-m) 0;
          font-size: var(--font-size-xl);
          line-height: 1.167;
          font-family: var(--font-family-heading);
        }

        .doctor-image {
          margin: var(--spacer-m) auto;

          .image {
            aspect-ratio: 1;
            display: flex;
            position: relative;
            width: var(--figure-size, 30rem);

            img {
              border-radius: 50%;
              height: 100%;
              object-fit: cover;
              width: 100%;
            }
          }

          figcaption {
            margin-top: var(--spacer-m);

            .name {
              font-weight: 700;
              margin-bottom: var(--spacer-xxs);

              a {
                color: inherit;
                text-decoration: none;
                transition: color .125s;

                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }

      .department-contact {
        h3 {
          font-family: var(--font-family-heading);
          margin: 0;
        }

        ul {
          list-style: none;
          margin: var(--spacer-xs) 0;
          padding: 0;

          li {
            a {
              text-decoration: underline;
              color: var(--link-color);
              transition: color .125s;

              &:hover {
                color: var(--link-color-hover);
                text-decoration: underline;
              }
            }

            a[href^=tel]:not(:focus) {
              text-decoration: none;
            }

            a[href^=tel] {
              color: inherit;
            }
          }
        }

        .actions {
          margin-top: var(--spacer-m);

          .button-secondary {
            border: none;
            background: var(--button-secondary-bg);
            color: var(--button-secondary-color);

            &:hover {
              background: var(--button-secondary-bg-hover);
              border-color: var(--button-secondary-bg-hover);
              color: var(--button-secondary-color-hover);
            }
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

            &:hover {
              text-decoration: none;
            }
          }

          ul {
            list-style: none;
            margin: var(--spacer-xs) 0;
            padding: 0;

            li {
              //background: no-repeat center left / 4rem auto;
              //margin: 0;
              //padding: var(--spacer-m) 0 var(--spacer-m) 4.8rem;
              a {
                text-decoration: underline;
                color: var(--link-color);
                transition: color .125s;
                padding-left: 1rem;
              }

              p {
                border-left: var(--border-highlight);
                padding-left: var(--spacer-s);
                line-height: 1.286;
              }
            }
          }
        }
      }
      
      .department-media {
        border-top: 0.1rem dotted var(--main-color-b-1);
        margin: var(--spacer-m) auto 0;
        padding: var(--spacer-m) 0 0;
        h2{
          font-size: var(--font-size-xl);
          line-height: 1.167;
          font-family: var(--font-family-heading);
          margin: 0 0 var(--spacer-m) 0;
        }
        .department-gallery{
          position: relative;
          .carousel-button {
            -webkit-backdrop-filter: none;
            backdrop-filter: none;
            background-color: transparent;
            background-size: contain;
            box-shadow: none;
            height: 3.8rem;
            opacity: .5;
            padding: 0;
            width: 1.8rem;
            border: none;
            //border-radius: 30%;
            cursor: pointer;
            display: inline-block;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            transition: .25s;
            z-index: 4;
            &:hover{
              background-color: transparent;
              box-shadow: none;
              opacity: 1;
            }
          }
          .prev{
            background: url("${buttonLeft.src}") no-repeat center;
            left: auto;
            right: 100%;
          }
          .next{
            background: url("${buttonRight.src}") no-repeat center;
            left: 100%;
            right: auto;
          }
          ul{
            list-style: none;
            margin: var(--spacer-xs) 0;
            padding: 0;
            overflow: hidden;
            display: flex;
            li:not(:last-of-type){
              margin: 0 0 var(--spacer-s);
            }
            li{
              padding: var(--spacer-xs);
              width: 100%;
              flex: none;
              transition: .25s;
              figure{
                align-items: center;
                aspect-ratio: 16/9;
                background: linear-gradient(to bottom right, var(--main-color-a-shade), var(--main-color-b-shade));
                box-shadow: var(--block-shadow);
                display: flex;
                margin: 0;
                img{
                  height: 100%;
                  object-fit: contain;
                  width: 100%;
                }
              }
              .proportional-container {
                overflow: hidden;
                padding: 0;
                position: relative;
                iframe{
                  height: 100%;
                  object-fit: contain;
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }

    .department-about {
      p {
        line-height: 1.875;
      }

      .services__specializations {
        border-top: var(--border-intersection);
        margin-top: var(--spacer-m);
        padding-top: var(--spacer-m);

        h2 {
          margin: 0 0 var(--spacer-m) 0;
          font-size: var(--font-size-xl);
          line-height: 1.167;
          font-family: var(--font-family-heading);
        }

        h3 {
          color: var(--main-color-b-1);
        }

        ul {
          border-left: var(--spacer-xs) solid var(--main-color-b-4);
          margin-left: var(--spacer-m);
          padding-left: var(--spacer-m);

          li {
            line-height: 1.875;

            p {
              margin: 0;
            }

            a {
              text-decoration: underline;
              color: var(--link-color);
              transition: color .125s;

              &:hover {
                color: var(--link-color-hover);
                text-decoration: underline;
              }
            }
          }
        }
      }

      .services__for-patients {
        border-top: var(--border-intersection);
        margin-top: var(--spacer-m);
        padding-top: var(--spacer-m);

        h2 {
          margin: 0 0 var(--spacer-m) 0;
          font-size: var(--font-size-xl);
          line-height: 1.167;
          font-family: var(--font-family-heading);
        }

        ul {
          display: grid;
          gap: var(--spacer-m);
          grid-template-columns: 1fr 1fr 1fr;
          list-style: none;
          margin: var(--spacer-m) auto;
          padding: 0;

          li {
            line-height: calc(18.75 / 16);

            figure {
              margin: 0;
              cursor: pointer;

              .image {
                height: 4rem;
                width: 4rem;

                img {
                  height: 100%;
                  object-fit: contain;
                  width: 100%;
                }
              }

              figcaption {
                a {
                  text-decoration: underline;
                  color: var(--link-color);
                  transition: color .125s;

                  &:hover {
                    color: var(--link-color-hover);
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // end department-info
  .department-doctors {
    h2 {
      font-size: var(--font-size-xl);
      line-height: 1.167;
      font-family: var(--font-family-heading);
      margin: 0;
    }

    ul {
      --card-size: 16rem;
      --figure-size: 100%;
      display: grid;
      gap: var(--spacer-m) var(--spacer-s);
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      list-style: none;
      padding: 0;

      li {
        .doctor-preview {
          height: 100%;

          figure {
            margin: 0;
            display: flex;
            flex-direction: column;
            height: 100%;

            .image {
              aspect-ratio: 1;
              display: flex;
              position: relative;
              width: var(--figure-size, 30rem);

              img {
                border-radius: 50%;
                height: 100%;
                object-fit: cover;
                width: 100%;
              }
            }

            figcaption {
              display: flex;
              flex: 1;
              flex-direction: column;
              padding: 0 var(--spacer-xxs);

              .name {
                font-weight: 700;
                margin: var(--spacer-m) 0 var(--spacer-s);

                a {
                  color: inherit;
                  text-decoration: none;
                  transition: color .125s;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }

              .position {
                font-size: var(--font-size-normal);
                font-weight: 200;
                line-height: 1.286;
              }

              .qualification {
                padding: var(--spacer-xs);
                text-align: left;
              }

              .experience {
                span {
                  font-weight: bold
                }
              }
            }
          }
        }
      }
    }
  }
  .department-testimonials{
    border-top: 0.1rem dotted var(--main-color-b-1);
    margin: var(--spacer-m) 0 0 0;
    padding: var(--spacer-m) var(--spacer-s) 0;
    h2{
      font-size: var(--font-size-xl);
      line-height: 1.167;
      font-family: var(--font-family-heading);
      margin: 0 0 var(--spacer-m) 0;
    }
    .actions{
      margin-top: var(--spacer-m);
      text-align: center;
      a{
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
    .testimonials__carousel{
      position: relative;
      .carousel-button {
        -webkit-backdrop-filter: none;
        backdrop-filter: none;
        background-color: transparent;
        background-size: contain;
        box-shadow: none;
        height: 3.8rem;
        opacity: .5;
        padding: 0;
        width: 1.8rem;
        border: none;
        //border-radius: 30%;
        cursor: pointer;
        display: inline-block;
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        transition: .25s;
        z-index: 4;
        &:hover{
          background-color: transparent;
          box-shadow: none;
          opacity: 1;
        }
      }
      .prev{
        background: url("${buttonLeft.src}") no-repeat center;
        left: auto;
        right: 100%;
      }
      .next{
        background: url("${buttonRight.src}") no-repeat center;
        left: 100%;
        right: auto;
      }
      ul{
        display: flex;
        list-style: none;
        margin: 0;
        overflow: hidden;
        padding: 0;
        li{
          flex: none;
          margin: 1rem;
          padding: 0;
          transition: .25s;
          width: 50%;
          .name{
            padding-top: 1rem;
            font-weight: bold;
          }
          a {
            text-decoration: underline;
            color: var(--link-color);
            transition: color .125s;

            &:hover {
              color: var(--link-color-hover);
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;