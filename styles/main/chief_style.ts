import styled from "styled-components";
import down from '../../public/img/main/chief/down.svg'
import paperclip from '../../public/img/main/chief/paperclip.svg'
import checked from '../../public/img/main/chief/checked.svg'

export const MainChief = styled.section`
  background: var(--main-color-b-4-shade-1);
  padding: var(--spacer-m) 0;

  h2 {
    font: 500 var(--font-size-xl) var(--font-family-heading);
    text-align: center;
    margin: 0;
  }

  .content-wrapper {
    display: grid;
    grid-auto-rows: auto;
    grid-gap: var(--spacer-m);
    grid-template-columns: 30rem auto;
    margin-top: var(--spacer-m);
    max-width: 88rem;
    padding-left: var(--spacer-xs);
    padding-right: var(--spacer-xs);
    position: relative;
    margin-left: auto;
    margin-right: auto;

    .chief-figure {
      margin: 0;

      .image {
        border-radius: 50%;
        box-shadow: var(--block-shadow);
        height: 15rem;
        overflow: hidden;
        width: 15rem;
        position: relative;

        span {
          position: unset !important;
        }

        img {
          height: 100% !important;
          object-fit: cover;
          width: 100% !important;
        }
        @media(max-width: 800px){
          margin: 0 auto;
        }
      }

      figcaption {
        .name {
          font-size: var(--font-size-large);
          font-weight: 700;
          margin: var(--spacer-s) 0;
        }

        .title {

        }
      }
      @media (max-width: 800px){
        text-align: center;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 0;
      padding: 0;

      .fields {
        display: grid;
        gap: 0 var(--spacer-s);
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: auto;
        margin-bottom: var(--spacer-s);
        padding: 0;

        .visually-hidden {
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

        input:not([type=radio]):not([type=checkbox]):not([size]):not([type=number]):not([type=date]), .fields textarea {
          width: 100%;
        }
        .toggle-label {
          align-items: flex-end;
          color: var(--text-color-form-contol);
          cursor: pointer;
          display: flex;
          flex-direction: row;
          gap: var(--spacer-s);
          
          .icon {
            background: url("${down.src}") no-repeat center/contain;
            display: inline-block;
            height: 1.6rem;
            transition: .25s;
            width: 1.6rem;
          }
          .label{
            color: var(--text-color-form-contol);
            text-decoration: none;
          }
          @media (max-width: 500px){
            margin-top: var(--spacer-s);
          }
        }
        @media (max-width: 500px){
          grid-template-columns: 1fr;
        }       
      }
    }
    @media (max-width: 800px){
      grid-gap: var(--spacer-s);
      grid-template-columns: 1fr;
      max-width: 60rem;
    }
  }

  label {
    display: flex;
    flex-direction: column;
  }

  .floating-label {
    //display: inline-block;
    padding: 1.4rem 0 0 0;
    position: relative;

    input {
      background: transparent;
      border-left: none;
      border-radius: 0;
      border-right: none;
      border-top: none;
      border-width: 1px;
    }

    input:not([type=checkbox]):not([type=radio]) {
      min-width: 1ch;
    }

    .input-text {
      //background-color: var(--form-input-bg);
      //border: 0.1rem solid var(--input-border);
      //border-radius: var(--spacer-xxs);
      font-size: var(--font-size-normal);
      margin: 0;
      padding: var(--spacer-xxs) var(--spacer-xs);
    }

    input:focus {
      border-bottom: 0.2rem solid #009688;
      box-shadow: none;
    }

    .input-text:focus {
      //border-color: var(--input-border-focus);
      //box-shadow: 0.1rem 0.1rem 0.2rem var(--input-border-focus);
      outline: none;
    }
    span{
      top: 1.2rem;
      font-size: 1rem;
      left: 0.4rem;
      line-height: 1;
      opacity: 0;
      pointer-events: none;
      position: absolute;
      transition: .25s;
    }
  }
  .toggle-box:checked~.toggle-label .icon {
    transform: rotate(180deg);
  }
  .toggle-box:not(:checked)~.toggleable {
    display: none;
  }
  .wide{
    grid-column: 1/-1;
    display: flex;
    flex-direction: column;
  }
  .file-label{
    flex-direction: row;
    margin-top: var(--spacer-s);
    align-items: center;
    background: url("${paperclip.src}") no-repeat center left var(--spacer-xxs)/contain;
    cursor: pointer;
    display: flex;
    padding: var(--spacer-xxs) 0 var(--spacer-xxs) 3.2rem;
  }
  .fields{
    input:not([type=checkbox]):not([type=radio]) {
      min-width: 1ch;
    }
    span{
      color: var(--link-color);
      text-decoration: underline;
    }
  }
  .feedback-comment {
    grid-column: 1/-1;
    textarea {
      flex: 1;
      width: 100%;
      background-color: var(--form-input-bg);
      border: 0.1rem solid var(--input-border);
      border-radius: var(--spacer-xxs);
      font-size: var(--font-size-normal);
      margin: 0;
      padding: var(--spacer-xxs) var(--spacer-xs);
      &:focus{
        border-color: var(--input-border-focus);
        box-shadow: 0.1rem 0.1rem 0.2rem var(--input-border-focus);
        outline: none;
      }
      @media (max-width: 800px){
        min-height: 14rem;
      }
    }
  }
  .consent{
    color: var(--text-color-secondary);
    flex-direction: row;
    label{
      font-size: var(--font-size-decreased);
      font-style: italic;
      input{
        -webkit-appearance: none;
        appearance: none;
        border: 0.2rem solid var(--form-control-color);
        border-radius: 0.2rem;
        display: inline-block;
        height: 1.6rem;
        outline: none;
        width: 1.6rem;
        &:checked{
          background: url("${checked.src}") no-repeat center/cover;
          border: none;
        }
        &:focus{
          box-shadow: 0.2rem 0.2rem 0.2rem var(--input-border-focus);
        }
      }
      span{
        cursor: pointer;
        flex: 1;
        padding-top: 0.1rem;
      }
    }
  }
  .actions{
    align-items: center;
    display: flex;
    gap: var(--spacer-s);
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: var(--spacer-s);
    text-align: center;
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
`;