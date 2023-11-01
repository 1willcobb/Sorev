import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";
import { CssBaseline } from "@mui/material";


const theme = createTheme({
  spacing: 4,
  palette: {
    text: { primary: "#FFFFFF" },
    primary: { main: "#87D2A7" },
    secondary: { main: "#EEA186" },
    error: { main: "#C1A2EA" },
    warning: { main: "#F7D976" },
    background: {
      default: "#343434"
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
