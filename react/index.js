import * as React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import "./index.scss";
import App from "./App";
import theme from "./source/theme";

ReactDOM.render(
  <SnackbarProvider maxSnack={3} preventDuplicate>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </SnackbarProvider>,
  document.querySelector("#root")
);
