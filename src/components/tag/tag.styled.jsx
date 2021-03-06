import styled from 'styled-components';

export const StyledTag = styled.section`
  > .tag_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    > .tag_list {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      max-height: 70%;
      row-gap: 10px;
      width: 70%;
      padding: 0.5em 0;
      border-radius: 8px;
      border: 2px solid lightgray;
      overflow: auto;
      > .tag_item {
        display: flex;
        align-items: center;
        margin-left: 0.8em;
        padding: 0.6em 0.8em;
        border-radius: 8px;
        background-color: #4902ce;
        color: #fff;
        font-size: 0.8rem;
        box-shadow: inset 2px 2px 0px #000;
        list-style: none;
        > .tag_item-text {
          margin-right: 0.4em;
          text-shadow: 2px 2px 2px #000;
          white-space: nowrap;
        }
        > .tag_item-delete {
          display: block;
          width: 1em;
          height: 1em;
          line-height: 1em;
          border-radius: 50%;
          background-color: #fff;
          color: #000;
          text-align: center;
          box-shadow: 1px 2px 2px #000;
          cursor: pointer;
        }
      }
      > .tag_input {
        flex-grow: 1;
        margin-left: 0.8em;
        border: none;
        font-size: 1rem;
        background-color: #fff;
        outline: none;
      }
    }
    > .tag_list:focus-within {
      border-color: black;
    }
  }
`;
