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
    border: 1px solid green;
    width: 110rem;
    height: 35rem;
  }

  .btn-slide {
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
    background-color: transparent;
    background-size: 2.5rem auto;
    border-radius: 0.4rem;
    box-shadow: none;
    height: 8rem;
    width: 4rem;
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
  }
`;