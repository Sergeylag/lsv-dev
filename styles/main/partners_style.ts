import styled from "styled-components";
import left from '../../public/img/main/partners/carousel-left.svg'
import right from '../../public/img/main/partners/carousel-right.svg'

export const MainPartners = styled.section`
  padding: var(--spacer-m) 0;

  div {
    margin: 0 auto;
    max-width: var(--content-width);
    position: relative;

    .carousel-button {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
      //background-color: transparent;
      //background-size: contain;
      box-shadow: none;
      height: 3.8rem;
      opacity: .5;
      padding: 0;
      width: 1.8rem;
      background: rgba(255,255,255,0.5) no-repeat center/auto 1.6rem;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: inline-block;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      transition: .25s;
      z-index: 4;
      font-size: inherit;
    }

    .carousel-button.prev {
      background-image: url("${left.src}");
      left: auto;
      right: 100%;
    }

    .carousel-button.next {
      background-image: url("${right.src}");
      left: 100%;
      right: auto;
    }
    .carousel-container{
      display: flex;
      list-style: none;
      margin: 0;
      overflow: hidden;
      padding: 0;
      .carousel-item {
        flex: none;
        margin: 0;
        transition: .25s;
        padding: 0 var(--spacer-s);
        width: 25%;
        @media (max-width: 720px){
          width: calc(100% / 3);
        }
        @media (max-width: 480px){
          width: 50%;
        }
      }
    }
  }
`;