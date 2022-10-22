import { useAppTheme } from "../../providers/AppThemeProvider";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { headerIcon } from "../../utils/commonStyles";
import * as headerComp from "../headerComponents/";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const Header = () => {

    const { mode, toggleTheme } = useAppTheme();

    return (
        <headerComp.HeaderContainer>
            <Box>
                <headerComp.HeaderIconBtn>
                    <MenuIcon fontSize='inherit' />
                </headerComp.HeaderIconBtn>
                <headerComp.HeaderLogo />
            </Box>
            <Box>
                {
                    mode === 'light' ?
                        <DarkModeIcon onClick={toggleTheme} sx={headerIcon} /> :
                        <LightModeIcon onClick={toggleTheme} sx={headerIcon} />
                }
            </Box>
        </headerComp.HeaderContainer>
    );
}

export { Header };