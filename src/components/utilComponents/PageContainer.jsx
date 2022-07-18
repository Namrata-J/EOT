import { Box } from '@mui/material';
import { fullScreen, flexCenter } from "../../utils/commonStyles";

const PageContainer = ({ children }) => {
    return (
        <Box sx={{
            backgroundColor: 'primary.dark',
            ...fullScreen,
            ...flexCenter
        }}>
            {children}
        </Box>
    );
}

export { PageContainer };