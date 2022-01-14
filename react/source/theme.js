import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: '"Merienda", cursive',
  },
  palette: {
    primary: {
      main: "rgb(68, 139, 68)",
    },
    secondary: {
      main: "rgb(141, 202, 141)",
    },
    spacing: 24,
  },
});

export default theme;
