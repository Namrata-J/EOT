import { scrollbar, sectionSpacing } from "../../utils/commonStyles";
import { ProfileDetails } from "../profilePageComponents/";
import { Box } from '@mui/material';

const ProfileSection = ({ profileId }) => {
    return (
        <Box
            sx={{
                ...scrollbar,
                width: '45rem',
                ...sectionSpacing,
                position: 'relative'
            }}>
            <ProfileDetails profileId={profileId} />
        </Box>
    );
}

export { ProfileSection };