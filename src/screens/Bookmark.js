import { PostsListing } from "../components/postsSectionComponents/PostsListing";
import { scrollbar, sectionSpacing } from "../utils/commonStyles";
import { pageBoxStyling } from "../utils/commonStyles";
import { utilComp } from "../components/";
import { Box } from '@mui/material';

const BookmarkPage = () => {
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
                    <PostsListing />
                </Box>
                <utilComp.FollowRecommendationSection />
            </Box>
        </utilComp.PageContainer>
    );
}

export { BookmarkPage };