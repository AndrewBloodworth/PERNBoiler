// Burger.styled.js
import styled from "styled-components";

export const StyledLoading = styled.section`
  height: 100%;
  figure {
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    figure {
      height: 35%;
      width: 35%;
      @keyframes breathe {
        0% {
          transform: scale(1);
        }
        33% {
          transform: scale(1.3);
        }
        66% {
          transform: scale(0.7);
        }
        100% {
          transform: scale(1);
        }
      }
      animation: 1s ease-in-out 1s infinite alternate breathe;
    }
  }
`;
