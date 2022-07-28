import { Box } from '@mui/material';
import * as createPost from "../createPostComponents/";
import { PostsListing } from "../postsSectionComponents/";
import { RecommendationCardListing } from "../recommendationCard/";
import { scrollbar, sectionSpacing } from "../../utils/commonStyles";

const ContentSection = () => {
    return (
        <Box
            sx={{
                ...scrollbar,
                width: '45rem',
                ...sectionSpacing,
                position: 'relative'
            }}>
            <createPost.CreatePostCard btnType="POST" />
            <Box sx={{
                display: { xs: 'block', md: 'none' },
                width: '100%',
                height: '10rem',
                mt: 2,
                overflowX: 'scroll',
                scrollbarWidth: 'none',
                "&::-webkit-scrollbar": {
                    display: "none"
                },
            }}>
                <RecommendationCardListing />
            </Box>
            <PostsListing />
        </Box>
    );
}

export { ContentSection };