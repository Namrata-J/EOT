import { Box } from '@mui/material';
import * as createPost from "../createPostComponents/";
import { PostsListing } from "../postsSectionComponents/";
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
            <createPost.CreatePostCard />
            <createPost.EmojiPicker />
            <PostsListing />
        </Box>
    );
}

export { ContentSection };