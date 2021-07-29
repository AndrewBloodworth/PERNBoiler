import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.primaryLight};

  height: ${({ theme }) => theme.dimensions.nav.height};
  width: 100%;
  box-shadow: 0 1px 3px #5d5d637e;
  position: fixed;
  z-index: 100;

  a {
    text-decoration: none;
    color: #5d5d63;
    margin: auto 20px;
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
