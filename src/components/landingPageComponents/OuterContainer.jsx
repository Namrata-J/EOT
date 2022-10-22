import { Box } from '@mui/material';
import { flexCenter, fullScreen } from '../../utils/commonStyles';

const OuterContainer = ({ children }) => {
    return (
        <Box sx={{
            ...flexCenter,
            ...fullScreen,
            bgcolor: 'primary.light'
        }}>
            {children}
        </Box>
    );
}

export { OuterContainer };