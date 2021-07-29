import styled from "styled-components";

export const StyledPixelize = styled.figure`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  canvas {
    display: block;
    height: ${({ size }) => `${size.height}px`};
    width: ${({ size }) => `${size.width}px`};
    canvas {
      ${
        "" /* height: ${({ size }) => `${size.height}px`};
      width: ${({ size }) => `${size.width}px`}; */
      }
    }
  }
  color: rgba(23, 41, 58, 0.8);
`;
