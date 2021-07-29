import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  html, body {
    margin: 0;
    padding: 0;
    font-family: "Lato", sans-serif;
  }

  *, *::after, *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
font-weight: 400;
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.primaryLight};
    color: ${({ theme }) => theme.primaryDark};
    cursor: default;
  }
#styled-main-block {
  ::-webkit-scrollbar {
    display: none;
  }
}
  #main {
    height: 100vh;
    width: 100vw;
  }

  h1 {
    font-size: 2rem;
    text-align: left;
    text-transform: uppercase;
    margin: 0;
    background-color: ${({ theme }) => theme.primaryLight};
    z-index: 5;
    }

h1, h2, h3, h4, h5 {
  color: ${({ theme }) => theme.colors.darkGray}
}
h1,
    h2 {
      width: 100%;
    }
    h1 {
      margin-top: 20px;
    }
    h2 {
      ${"" /* margin-bottom: 0px; */}
    }
  img {
    border-radius: 5px;
    height: auto;
    width: 10rem;
    }

  small {
    display: block;
  }

  a {
    color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: none;
    cursor: pointer;
    }
    a:hover {
    color: ${({ theme }) => theme.colors.orange};
  }
section, header {
  width: 100%;
  ${"" /* height: 100%; */}
}
nav {
  width: 100vw;
}

`;
