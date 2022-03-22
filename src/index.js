import { Auth0Provider } from "@auth0/auth0-react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./components/AdminMenu/AdminMenu.css";
import "./index.css";
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
        <ThemeProvider theme={theme}>
            <Auth0Provider domain="yeseniamartinez.eu.auth0.com" clientId="6NYGJmsQJVeKAraiUY4T5Qi14ivMWWOU" redirectUri="http://localhost:3000">
                <App />
            </Auth0Provider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
