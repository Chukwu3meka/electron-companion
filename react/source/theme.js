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
      // contrastText: "#fff",
    },
    spacing: 24,
  },
});

const globalTheme = createTheme(
  {
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            overflow: "hidden",
            margin: "10px auto",
            boxSizing: "border-box",
            // padding: 10,
          },
          rounded: {
            borderRadius: 5,
          },
        },
      },

      MuiTable: {
        styleOverrides: {
          root: {
            minWidth: 300,
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
            cursor: "pointer",
          },
          body: {
            fontSize: 14,
          },
        },
      },
      MuiTableRow: {
        styleOverrides: {
          root: {
            "&:nth-of-type(odd)": {
              backgroundColor: theme.palette.action.hover,
            },
            // hide last border
            "&:last-child td, &:last-child th": {
              border: 0,
            },
          },
        },
      },
    },
  },
  theme
);

export default globalTheme;
