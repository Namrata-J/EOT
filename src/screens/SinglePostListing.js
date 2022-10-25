import { pageBoxStyling, scrollbar, sectionSpacing } from "../utils/commonStyles";
import { PostCard } from "../components/postsSectionComponents/PostCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { utilComp } from "../components/";
import { useSelector } from "react-redux";
import { Box } from '@mui/material';

const SinglePostListingPage = () => {

    const { postId } = useParams();
    const { posts } = useSelector((store) => store.post);
    const [postToBeShown, setPostToBeShown] = useState({});

    useEffect(() => {
        setPostToBeShown([...posts].find((eachPost) => eachPost._id === postId))
    }, [postId, posts])

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
                    {Object.keys(postToBeShown).length > 0 && <PostCard {...postToBeShown} />}
                </Box>
                <utilComp.FollowRecommendationSection />
            </Box>
        </utilComp.PageContainer>
    );
}

export { SinglePostListingPage };