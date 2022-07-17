import { createTheme, ThemeProvider } from '@mui/material/styles'
import Props from '../models/props.interface'
import Theme from '../models/theme.interface'
const ThemeContext = ({ children }: Props) => {
    const lightTheme: Theme = {
        palette: {
            primary: {
                main: '#005c64',
            },
            secondary: {
                main: '#efd309',
            },
        },
    }

    const theme = createTheme(lightTheme)

    return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
}

export default ThemeContext
