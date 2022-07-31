import { pageBoxStyling, scrollbar, sectionSpacing } from "../utils/commonStyles";
import { utilComp } from "../components/";
import { Box, Typography } from '@mui/material';

const NotificationPage = () => {
    return (
        <utilComp.PageContainer>
            <utilComp.Header />
            <Box sx={pageBoxStyling}>
                <utilComp.SideBar />
                <Box
                    sx={{
                        ...scrollbar,
                        width: '45rem',
                        ...sectionSpacing,
                        position: 'relative'
                    }}>
                    <Typography sx={{
                        textAlign: 'center',
                        pt: 10,
                        fontSize: { xs: '1rem', md: '1.2rem' }
                    }}>
                        No notifications yet
                    </Typography>
                </Box>
                <utilComp.FollowRecommendationSection />
            </Box>
        </utilComp.PageContainer>
    );
}

export { NotificationPage };