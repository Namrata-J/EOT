import { Box } from '@mui/material';
import { verticalFlexCenter } from "../../utils/commonStyles";

const HeaderContainer = ({ children }) => {
    return (
        <Box sx={{
            ...verticalFlexCenter,
            zIndex: '2',
            boxShadow: 3,
            width: '100%',
            position: 'relative',
            pl: { xs: 0.5, sm: 2 },
            height: { xs: '8vh', sm: '10vh', md: '12vh' }
        }}>
            {children}
        </Box>
    );
}

export { HeaderContainer };