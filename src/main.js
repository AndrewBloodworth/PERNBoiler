/* eslint-disable no-unused-vars */
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import store from "./store";
import { theme } from "./theme";
import Main from "./components/Main/Main";

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  </Provider>,
  document.getElementById("main")
);
