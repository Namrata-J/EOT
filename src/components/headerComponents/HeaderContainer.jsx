import { Box } from '@mui/material';
import { verticalFlexCenter } from "../../utils/commonStyles";

const HeaderContainer = ({ children }) => {
    return (
        <Box sx={{
            ...verticalFlexCenter,
            backgroundColor: 'primary.main',
            boxShadow: '#091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            position: 'relative',
            pl: { xs: 0.5, sm: 2 },
            pr: 2,
            height: { xs: '8vh', sm: '10vh' },
            zIndex: '3',
        }}>
            {children}
        </Box>
    );
}

export { HeaderContainer };