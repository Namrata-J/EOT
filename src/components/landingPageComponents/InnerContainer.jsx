import { Box } from '@mui/material';
import { containerType1, darkOpacity, flexBetweenVariant1 } from '../../utils/commonStyles';

const InnerContainer = ({ children }) => {
    return (
        <Box sx={{
            ...containerType1,
            ...darkOpacity,
            flexDirection: { xs: 'column', sm: 'row' },
            borderRadius: 6,
            p: { xs: 0, sm: 2 },
            ...flexBetweenVariant1
        }}>
            {children}
        </Box>
    );
}

export { InnerContainer };