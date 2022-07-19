import { Box } from '@mui/material';
import { flexBetweenVariant2 } from "../../utils/commonStyles";

const SideBarContainer = ({ children }) => {
    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                borderRadius: 5,
                width: '15rem',
                ...flexBetweenVariant2
            }}>
            {children}
        </Box>
    );
}

export { SideBarContainer };