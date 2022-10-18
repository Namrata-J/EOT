import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2f283b',
            light: '#3c354a'
        },
        secondary: {
            main: '#000000'
        },
        otherColors: {
            lightGreen: '#85b53e',
            lightestPurple: '#9c98bb',
            lightPurple: '#8041b0',
            mediumPurple: '#2d2640',
            transparentPurple: '#1a162a6b',
            lightestGray: '#f3f2f5',
            lightGray: '#edebeb',
            gray: '#56505a',
            white: '#ffffff',
            contradictory: '#9c5f64'
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