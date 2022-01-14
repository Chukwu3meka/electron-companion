import * as React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./source/theme";
import App from "./App";
import { SnackbarProvider } from "notistack";

import "./index.scss";

ReactDOM.render(
  <SnackbarProvider maxSnack={1} preventDuplicate>
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <App />
    </ThemeProvider>
    ,
  </SnackbarProvider>,
  document.querySelector("#root")
);
