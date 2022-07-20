import { Box } from '@mui/material';

const ContentSection = () => {
    return (
        <Box
            sx={{
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                width: '45rem',
                ml: '2rem',
                mr: '2rem'
            }}>

        </Box>
    );
}

export { ContentSection };