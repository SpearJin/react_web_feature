import styled from 'styled-components';

export const StyledToggle = styled.section`
  > .toggle_container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 8rem;
    height: 6.5rem;
    border-radius: 80px;
    > .toggle_label {
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 80px;
      background-color: #c5c5c5;
      cursor: pointer;
      > .toggle_input {
        appearance: none;
      }
      > .toggle_input ~ .toggle_span {
        position: absolute;
        display: inline-block;
        top: 0;
        left: 0%;
        width: 0%;
        height: 100%;
        border-radius: 80px;
        background-color: #4902ce;
        box-shadow: inset 2px 2px 6px #000;
        transition: 300ms ease-in;
      }
      > .toggle_input:checked ~ .toggle_span {
        width: 100%;
      }
      > .toggle_span::before {
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 0;
        width: 2.5em;
        height: 2.5em;
        border-radius: 50%;
        background-color: #fff;
        content: '';
        transform: translate(10%, -50%);
        transition: 300ms ease-in;
      }
      > .toggle_input:checked ~ .toggle_span::before {
        position: absolute;
        transform: translate(210%, -50%);
      }
    }
  }
`;
