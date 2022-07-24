import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './assets/styles/main.scss'
import Auth0ProviderContext from './contexts/auth.context'
import ThemeContext from './contexts/theme.context'
import reportWebVitals from './reportWebVitals'
ReactDOM.render(
    <Auth0ProviderContext>
        <Router>
            <ThemeContext>
                <App />
            </ThemeContext>
        </Router>
    </Auth0ProviderContext>,

    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
