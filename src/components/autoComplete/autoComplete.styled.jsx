import styled from 'styled-components';

export const StyledAutoComplete = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 15rem;
  padding-top: 1em;
  border-bottom: 1px solid lightgray;
  > .auto_container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
    > .auto {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      border: 2px solid lightgray;
      border-radius: 12px;
      overflow-y: auto;
      > .auto_input_container {
        display: flex;
        align-items: center;
        width: 100%;
        > .auto_input {
          flex-grow: 1;
          padding: 1em 0.8em;
          border: none;
          border-radius: 5px 5px 0;
          font-size: 1rem;
          outline: none;
        }
        > .auto_cancle {
          padding-right: 0.8em;
          cursor: pointer;
        }
      }
      > .auto_list {
        width: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: auto;
        > .auto_item {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 0.2em 0.5em;
        }
        > .auto_item:first-child {
          border-top: 1px solid lightgray;
          padding: 0.6em 0.5em;
        }
        > .auto_item:hover {
          background-color: lightgray;
        }
      }
    }
    > .auto:focus-within {
      box-shadow: 2px 4px 3px 0px lightgray;
    }
  }
  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
    align-items: center;
  }
`;
