import { Box } from '@mui/material';
import { fullScreen } from "../../utils/commonStyles";

const PageContainer = ({ children }) => {
    return (
        <Box sx={{
            backgroundColor: 'primary.light',
            ...fullScreen
        }}>
            {children}
        </Box>
    );
}

export { PageContainer };