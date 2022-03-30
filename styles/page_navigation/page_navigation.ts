import styled from "styled-components";
import breadcrumb from '../../public/icons/breadcrumb.svg'
import breadcrumbHover from '../../public/icons/breadcrumbHover.svg'


export const PageNavigation = styled.nav`
  background: var(--bg-shader-secondary);
  box-shadow: 0.2rem 0 0.4rem var(--main-color-a);
  position: relative;
  z-index: 1;

  .content-wrapper {
    padding: var(--spacer-s) var(--spacer-xs);
    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);
    position: relative;
  }

  a {
    background: url("${breadcrumb.src}") no-repeat bottom 0.1rem right/0.6rem 1.2rem;
    padding-right: 1rem;
    transition: background .25s;
    text-decoration: underline;
    color: var(--link-color);

    &:hover {
      color: var(--link-color-hover);
      text-decoration: underline;
      background-image: url("${breadcrumbHover.src}");
    }
  }

`;