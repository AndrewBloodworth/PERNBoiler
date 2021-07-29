import styled from "styled-components";

export const StyledPortal = styled.div`
  display: flex;
  justify-content: flex-start;
  height: ${({ theme }) => `calc(100vh - ${theme.dimensions.footer.height})`};
  width: 100%;
  padding-top: 80px;

  #main-portal {
    margin: 0 20px;
    display: flex;
    justify-content: flex-start;

    div {
      flex-direction: column;
      align-items: flex-start;

      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      section {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
        overflow: scroll;
      }

      ::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
