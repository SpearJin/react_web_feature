import styled from 'styled-components';

export const StyledTab = styled.section`
  > .tab_container {
    height: 100%;
    .tab_btn {
      width: 16em;
      height: 2.5em;
      border: transparent;
      color: darkgray;
      cursor: pointer;
    }
    .tab_btn.active {
      background-color: #4902ce;
      color: #fff;
    }
    > .tab_content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }
  }
`;
