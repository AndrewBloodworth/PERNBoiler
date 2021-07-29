import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  box-shadow: 0 -1px 3px #5d5d637e;
  height: ${({ theme }) => theme.dimensions.footer.height};
  width: 100%;
  bottom: 0;
  background-color: ${({ theme }) => theme.primaryLight};
  ul {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 20px;
  }
  ul > li {
    list-style-type: none;
    padding: 0 10px;
    color: #7e7f84;
    cursor: pointer;
  }
  div {
    :nth-child(1) {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    :nth-child(2) {
      padding-right: 30px;
      color: #7e7f84;
    }
  }
`;
