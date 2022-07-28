import { useEffect } from 'react';
import { Box } from '@mui/material';
import { PostCard } from "./PostCard";
import { useFilter } from "../../contexts/";
import { useLocation } from 'react-router-dom';
import { filterTagsFunc } from "../../utils/filterFunc";
import { verticalFlex } from "../../utils/commonStyles";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from "../../redux/features/post/postSlice";

const PostsListing = () => {

    const { comments } = useSelector((store) => store.comment);
    const { posts } = useSelector((store) => store.post);
    const { stateOfFilter } = useFilter();
    const dispatch = useDispatch();
    const location = useLocation();

    const filteredPosts = filterTagsFunc(posts, stateOfFilter);

    useEffect(() => {
        dispatch(getAllPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comments, dispatch]);

    return (
        <Box
            sx={{
                ...verticalFlex,
                mt: 2,
                mb: 2,
                gap: 2
            }}>
            {
                location.pathname === "/home" ?
                    posts.map((post, index) => <PostCard key={index} {...post} />) :
                    filteredPosts.map((post, index) => <PostCard key={index} {...post} />)
            }
        </Box>
    );
}

export { PostsListing };