import { createTheme, ThemeProvider } from '@mui/material/styles'
import Props from '../models/props.interface'

const ThemeContext = ({ children }: Props) => {
    const lightTheme = createTheme({
        palette: {
            primary: {
                main: '#005c64',
            },
            secondary: {
                main: '#efd309',
            },
        },
    })

    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}

export default ThemeContext
