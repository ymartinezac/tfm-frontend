import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./assets/styles/main.scss";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
    palette: {
        type: "light",
        primary: {
            main: "#005c64",
        },
        secondary: {
            main: "#efd309",
        },
    },
});
ReactDOM.render(
    <React.StrictMode>
        <Router>
        
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
           
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
