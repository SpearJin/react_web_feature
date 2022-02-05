import styled from 'styled-components';

export const StyledModal = styled.section`
  padding: 0;
  > .modal_container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    > .modal_btn {
      width: 8em;
      height: 4em;
      border-radius: 40px;
      border: transparent;
      background-color: #4902ce;
      box-shadow: inset 2px 2px 0px #000;
      cursor: pointer;
      > .modal_btn_text {
        color: #fff;
        text-shadow: 2px 2px 0 #000;
      }
    }
    > .modal_window {
      display: none;
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: lightgray;
      z-index: 1;
      > .modal_window_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        padding: 2em 4em;
        border-radius: 20px;
        background-color: #fff;
        > span {
          display: inline-block;
        }
        > .modal_window_btn {
          text-align: center;
          cursor: pointer;
        }
        > .modal_window_text {
          margin-top: 1em;
        }
      }
    }
    > .modal_window.active {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;