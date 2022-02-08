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
      display: ${({ isDisplay }) => (isDisplay ? 'block' : 'none')};
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
      display: ${({ isDisplay }) => (isDisplay ? 'none' : 'block')};
      width: 100%;
      height: 100%;

      z-index: 1;
      > .window_container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        background-color: lightgray;
        > .window {
          display: flex;
          flex-direction: column;
          padding: 2em 4em;
          border-radius: 20px;
          background-color: #fff;
          > span {
            display: inline-block;
          }
          > .window_btn {
            text-align: center;
            cursor: pointer;
          }
          > .window_text {
            margin-top: 1em;
          }
        }
      }
    }
  }
`;
