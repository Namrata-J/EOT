import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#393148',
            light: '#3c354a'
        },
        secondary: {
            main: '#000000'
        },
        otherColors: {
            lightestGray: '#d5d3db',
            lightGray: '#9c9aa8',
            gray: '#56505a',
            white: '#ffffff'
        }
    },
    typography: {
        allVariants: {
            fontFamily: 'Gruppo',
            color: '#9c9aa8'
        }
    }
});

const AppThemeProvider = ({ children }) => {
    return <ThemeProvider theme={ theme }>
        {children}
    </ThemeProvider>
}

export { AppThemeProvider }