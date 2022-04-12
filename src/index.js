import { Auth0Provider } from '@auth0/auth0-react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './assets/styles/main.scss'
import reportWebVitals from './reportWebVitals'

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#005c64',
        },
        secondary: {
            main: '#efd309',
        },
    },
})
ReactDOM.render(
    <React.StrictMode>
        <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}
            audience="https://tfm-backend.com"
            scope="read:current_user update:current_user_metadata read:pets"
        >
            <Router>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </Router>
        </Auth0Provider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
