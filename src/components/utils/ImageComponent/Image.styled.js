import styled from "styled-components";

export const StyledImage = styled.figure`
  figure {
    height: ${({ size }) => size.height};
    width: ${({ size }) => size.width};
    background-size: cover;
    -webkit-background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: ${({ url }) => `url("${url}")`};
  }
`;
