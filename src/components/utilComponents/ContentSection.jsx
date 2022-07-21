import { Box } from '@mui/material';
import * as createPost from "../createPostComponents/";

const ContentSection = () => {
    return (
        <Box
            sx={{
                overflowY: 'scroll',
                scrollbarWidth: 'none',
                width: '45rem',
                ml: { xs: '0.5rem', md: '2rem' },
                mr: { xs: '0.5rem', sm: '0rem', md: '2rem' },
                "&::-webkit-scrollbar": {
                    display: "none"
                },
                pt: { xs: '0.5rem', sm: 0 },
                pb: '0.5rem'
            }}>
            <createPost.CreatePostCard />
        </Box>
    );
}

export { ContentSection };