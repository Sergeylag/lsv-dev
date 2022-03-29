import styled from "styled-components";

export const MainPromo = styled.section`
  background: var(--bg-secondary);
  padding: var(--spacer-m) 0;
  .content-wrapper {
    padding-left: var(--spacer-xs);
    padding-right: var(--spacer-xs);
    position: relative;
    margin-left: auto;
    margin-right: auto;
    max-width: var(--content-width);
    ul{
      display: grid;
      grid-auto-rows: 1fr;
      grid-gap: var(--spacer-s);
      grid-template-columns: 1fr 1fr 1fr;
      list-style: none;
      margin: 0 auto;
      padding: 0;
      li{
        margin: 0;
        padding: 0;
        a{
          box-shadow: var(--block-shadow);
          display: block;
          transition: .25s;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          padding: 0;
          position: relative;
          color: var(--link-color);
          &:hover {
            box-shadow: var(--block-shadow-hover);
            transform: translateY(-0.1rem);
          }
          span{
            position: unset;
          }
          img{
            height: 100%;
            object-fit: contain;
            width: 100%;            
          }
        }
      }
      @media (max-width: 800px){
        grid-template-columns: 1fr;
        max-width: 40rem;
      }
    }
  }
`;