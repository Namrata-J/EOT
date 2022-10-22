import { Box } from '@mui/material';
import { fullScreen, flexCenter } from "../../utils/commonStyles";

const AuthPageOuterContainer = ({ children }) => {
    return (
        <Box sx={{
            backgroundColor: 'primary.light',
            ...fullScreen,
            ...flexCenter
        }}>
            {children}
        </Box>
    );
}

export { AuthPageOuterContainer };