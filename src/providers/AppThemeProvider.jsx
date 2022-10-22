import { createContext, useContext, useState, useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const appThemeContext = createContext({ toggleTheme: () => { }, mode: 'light' });

const AppThemeProvider = ({ children }) => {

    const [mode, setMode] = useState('light');

    const toggleMode = useMemo(() => ({
        toggleTheme: () => {
            setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
        mode
    }), [mode]);

    const theme = useMemo(() => createTheme({
        palette: {
            mode,
            ...(mode === 'light' ?
                {
                    // palette values for light mode
                    primary: {
                        light: '#f5f5f5',
                        main: '#ffffff',
                        dark: '#dee2e5'
                    },
                    secondary: {
                        main: '#6261bd'
                    },
                    otherColors: {
                        white: '#ffffff',
                        black: '#000000',
                        green: '#558b2f',
                        lightGray: '#757575',
                        gray: '#616161',
                        contradictory: '#d81b60',
                        contradictoryLightShade: '#ec407a'
                    },
                    typography: {
                        fontFamily: 'Gruppo',
                    },
                } :
                {
                    // palette values for dark mode
                    primary: {
                        light: '#121212',
                        main: '#212121',
                        dark: '#ffffff'
                    },
                    secondary: {
                        main: '#6261bd'
                    },
                    otherColors: {
                        white: '#ffffff',
                        black: '#000000',
                        green: '#66bb6a',
                        lightGray: '#bdbdbd',
                        gray: '#9e9e9e',
                        contradictory: '#d81b60',
                        contradictoryLightShade: '#ec407a'
                    },
                    typography: {
                        fontFamily: 'Gruppo',
                    },
                }),
        },
    }), [mode]);

    return <appThemeContext.Provider value={toggleMode}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </appThemeContext.Provider>
}

const useAppTheme = () => useContext(appThemeContext);

export { useAppTheme, AppThemeProvider }