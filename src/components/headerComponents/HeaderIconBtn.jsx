import { IconButton } from '@mui/material';

const HeaderIconBtn = ({ children }) => {
    return (
        <IconButton
            color="primary"
            size="medium"
            sx={{
                display: { xs: 'inline-block', sm: 'none' },
                height: '100%',
                mb: 4.5,
                "&:hover": {
                    color: 'otherColors.contradictory'
                }
            }}>
            {children}
        </IconButton>
    );
}

export { HeaderIconBtn };