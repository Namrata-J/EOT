import { Box } from '@mui/material';
import { containerType1, darkOpacity, flexBetweenVariant1 } from '../../utils/commonStyles';

const InnerContainer = ({ children }) => {
    return (
        <Box sx={{
            ...containerType1,
            ...darkOpacity,
            borderRadius: 6,
            flexWrap: 'wrap',
            p: { xs: 1, sm: 2 },
            gap: '2rem',
            ...flexBetweenVariant1
        }}>
            {children}
        </Box>
    );
}

export { InnerContainer };