import { Box } from '@mui/material';

const HeaderContainer = ({ children }) => {
    return (
        <Box sx={{
            boxShadow: 3,
            width: '100%',
            pl: { xs: 0.5, sm: 2 },
            height: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
        }}>
            {children}
        </Box>
    );
}

export { HeaderContainer };