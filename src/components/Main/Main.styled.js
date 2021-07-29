import styled from "styled-components";

export const StyledMain = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.1s ease-in-out;

  height: 100%;
  width: 100%;
  main {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
    section {
      overflow: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
      div {
        ::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;
