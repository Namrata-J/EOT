import { Box } from '@mui/material';
import { containerType1, flexBetweenVariant1 } from '../../utils/commonStyles';

const InnerContainer = ({ children }) => {
    return (
        <Box sx={{
            ...containerType1,
            bgcolor: 'primary.main',
            boxShadow: '#3c40434d 0px 1px 2px 0px, #3c404326 0px 1px 3px 1px',
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