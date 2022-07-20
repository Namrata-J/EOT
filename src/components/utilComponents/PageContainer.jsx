import { Box } from '@mui/material';
import { fullScreen } from "../../utils/commonStyles";

const PageContainer = ({ children }) => {
    return (
        <Box sx={{
            backgroundColor: 'primary.dark',
            ...fullScreen
        }}>
            {children}
        </Box>
    );
}

export { PageContainer };