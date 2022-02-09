import styled from 'styled-components';

export const StyledClickEdit = styled.section`
  > .clickEdit_container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    > .edit {
      display: flex;
      align-items: center;
      justify-content: center;
      > .clickEdit_input {
        height: 2em;
        margin-left: 1em;
        font-size: 1rem;
        text-align: center;
      }
    }
    span {
      font-size: 1.2rem;
    }
    @media screen and (max-width: 1024px) {
      span {
        font-size: 0.8rem;
      }
    }
  }
`;
