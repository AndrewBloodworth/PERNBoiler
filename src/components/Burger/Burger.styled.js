// Burger.styled.js
import styled from "styled-components";

export const StyledBurger = styled.button`
  position: absolute;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1.5rem;
  height: ${({ theme }) => theme.dimensions.nav.height};
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 5000;

  &:focus {
    outline: none;
  }

  div {
    width: 1.5rem;
    height: 0.25rem;
    margin: 2px;
    background: ${({ theme }) => theme.colors.darkGray};
    transition: ${({ theme }) => theme.transitions.burger};
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
