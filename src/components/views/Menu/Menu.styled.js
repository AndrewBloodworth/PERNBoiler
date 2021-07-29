import styled from "styled-components";

export const StyledMenu = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.primaryLight};
  height: ${`calc(100vh - 130px)`};
  text-align: left;
  box-shadow: inset 0 0 3px #5d5d637e;
  width: 0px;
  top: 80px;
  left: 0;
  z-index: 10;

  overflow: hidden;
  white-space: nowrap;
  transition: ${({ theme }) => theme.transitions.burger};
  width: ${({ open }) => (open ? `${`calc(500px + 2rem)`}` : "0")};

  div {
    flex-direction: column;
    h2 {
      white-space: nowrap;
    }
    section {
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
  header {
    ul > li {
      list-style-type: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    #page-1 {
      color: ${({ theme }) => theme.colors.darkGray};
      font-size: 1.17em;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
  }
`;
