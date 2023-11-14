import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./index.css";
import { CssBaseline } from "@mui/material";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const theme = createTheme({
  spacing: 4,
  palette: {
    text: { primary: "#FFFFFF" },
    primary: { main: "#87D2A7" },
    secondary: { main: "#EEA186" },
    error: { main: "#C1A2EA" },
    warning: { main: "#F7D976" },
    background: {
      default: "#343434",
      paper: "#343434",
    },
  },
});

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${localStorage.getItem("id_token")}`,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <CssBaseline />
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);
