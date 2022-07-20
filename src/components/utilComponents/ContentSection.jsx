import { Box } from '@mui/material';

const ContentSection = () => {
    return (
        <Box
            sx={{
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                width: '45rem',
                ml: { xs: '0.5rem', md: '2rem' },
                mr: { xs: '0.5rem', md: '2rem' },
                "&::-webkit-scrollbar": {
                    display: "none"
                }
            }}>

        </Box>
    );
}

export { ContentSection };