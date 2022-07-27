import { utilComp } from "../components/";
import { Box } from '@mui/material';

const HomePage = () => {
    return (
        <utilComp.PageContainer>
            <utilComp.Header />
            <Box
                sx={{
                    p: { sm: 1, md: 2, lg: 3 },
                    display: "flex",
                    width: "100%",
                    height: { xs: "92vh", sm: "90vh", md: "88vh" }
                }}>
                <utilComp.SideBar />
                <utilComp.ContentSection />
                <utilComp.FollowRecommendationSection />
            </Box>
        </utilComp.PageContainer>
    );
}

export { HomePage };