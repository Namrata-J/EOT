import { pageBoxStyling } from "../utils/commonStyles";
import { utilComp } from "../components/";
import { Box } from '@mui/material';

const HomePage = () => {
    return (
        <utilComp.PageContainer>
            <utilComp.Header />
            <Box sx={pageBoxStyling}>
                <utilComp.SideBar />
                <utilComp.ContentSection />
                <utilComp.FollowRecommendationSection />
            </Box>
        </utilComp.PageContainer>
    );
}

export { HomePage };