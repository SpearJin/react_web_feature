import styled from 'styled-components';

export const StyledTab = styled.section`
  > .tab_container {
    height: 100%;
    .tab_btn {
      /* width: 25vw; */
      height: 2.5em;
      padding: 0 8em;
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
    @media screen and (max-width: 1024px) {
      .tab_btn {
        padding: 0 5em;
      }
    }
  }
`;
