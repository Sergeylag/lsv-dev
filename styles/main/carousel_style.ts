import styled from "styled-components";
import rightBtn from '../../public/img/button-right.svg'
import leftBtn from '../../public/img/button-left.svg'

export const CarouselStyle = styled.section`
  position: relative;
  --carousel-height: 40rem;
  --button-ghost-color: var(--text-color-inverted-primary);
  color: var(--text-color-inverted-primary);
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0;
  width: 100%;

  .container-slider {
    display: flex;
    list-style: none;
    margin: 0;
    overflow: hidden;
    padding: 0;
  }

  .carousel-item {
    width: 100%;
    flex: none;
    margin: 0;
    padding: 0;
    transition: .25s;

    figure {
      position: relative;
      width: 100%;
      margin: 0;

      .image {
        //height: var(--carousel-height);
        width: 100%;
        height: 100%;

        img {
          height: 100%;
          object-fit: cover;
          object-position: center right;
          width: 100%;
        }
      }

      figcaption {
        align-items: flex-start;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        left: 0;
        padding: 0 var(--spacer-xl);
        position: absolute;
        right: 0;
        transition: background .25s;
        top: 0;
        z-index: 2;

        .title {
          font: 700 var(--font-size-xl) var(--font-family-heading);
          margin: 0;
          max-width: 48rem;
          @media (max-width: 640px){
            font-size: var(--font-size-large);
          }
        }

        .lead {
          font-size: var(--font-size-increased);
          margin-top: var(--spacer-s);
          @media (max-width: 640px){
            font-size: var(--font-size-normal);
          }
        }

        .link {
          font-size: var(--font-size-small);
          margin-top: var(--spacer-m);

          a {
            color: inherit;
            display: block;
            padding: var(--spacer-xs) var(--spacer-s);
            background: var(--button-ghost-bg);
            border-color: var(--button-ghost-color);
            border: 0.1rem solid;
            border-radius: 0.4rem;
            cursor: pointer;
            font-family: var(--font-family-main);
            font-size: inherit;
            margin: 0;
            text-align: center;
            text-decoration: none;
            transition: .25s;
            &:hover{
              background: var(--button-ghost-bg-hover);
              border-color: var(--main-color-b);
            }
          }
        }
        @media(max-width: 720px){
          background: rgba(11,10,10,0.4);
        }
        @media(max-width: 414px){
          padding: 0 var(--spacer-m);
        }
      }
    }

  }

  .btn-slide {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    //background-color: transparent;
    //background-size: 2.5rem auto;
    //border-radius: 0.4rem;
    box-shadow: none;
    //height: 8rem;
    //width: 4rem;
    opacity: .5;
    padding: 0;

    background: rgba(255, 255, 255, 0.5) no-repeat center/auto 5rem;
    border: none;
    border-radius: 50%;
    //box-shadow: 0 0 0.4rem rgb(0 0 0 / 25%);
    cursor: pointer;
    display: inline-block;
    height: 4rem;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    transition: .05s;
    width: 4rem;
    z-index: 4;

    &:focus,
    &:hover {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      background-color: transparent;
      box-shadow: none;
      filter: drop-shadow(0 0 .2rem var(--main-color-b-2)) drop-shadow(0 0 .4rem var(--main-color-a-1));
    }
    @media(max-width: 640px){
      background-size: 2rem auto;
      width: 3rem;
    }
    @media(max-width: 414px){
      background-size: 1.6rem auto;
      width: 2.4rem;
    }
  }

  .prev {
    background-image: url("${leftBtn.src}");
    left: auto;
    right: 100%;
  }

  .next {
    background-image: url("${rightBtn.src}");
    left: 100%;
    right: auto;
    @media(max-width: 1180px){
      left: 80%;
      visibility: hidden;
    }
  }
  @media (max-width: 720px){
    --carousel-height: 32rem;
  }
  @media (max-width: 640px){
    --carousel-height: 28rem;
  }
  
`;