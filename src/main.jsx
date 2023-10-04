import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { ThemeProvider, createTheme } from "@mui/material";
import { blue, deepOrange, yellow } from "@mui/material/colors";

// https://mui.com/material-ui/customization/default-theme/

const theme = createTheme({
  palette: {
    // mode: "dark",
    mode: "light",
    // primary: {
    // }
  },
  typography: {
    fontFamily: 'Helvetica, sans-serif', 
    fontWeightRegular: 400, 
    fontWeightBold: 700,
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
        color: "primary",
        variant: "contained",
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 3,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: 'inherit', 
          textDecoration: 'none', 
          justifyContent: "center"
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: 'center', 
          alignItems: 'center',
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
