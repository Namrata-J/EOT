import { useEffect } from 'react';
import { Box } from '@mui/material';
import { PostCard } from "./PostCard";
import { verticalFlex } from "../../utils/commonStyles";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from "../../redux/features/post/postSlice";

const PostsListing = () => {

    const { comments } = useSelector((store) => store.comment);
    const { posts } = useSelector((store) => store.post);
    const dispatch = useDispatch();

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
                posts.map((post, index) => <PostCard key={index} {...post} />)
            }
        </Box>
    );
}

export { PostsListing };