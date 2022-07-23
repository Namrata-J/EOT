import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from "../../redux/features/post/postSlice";

const PostsListing = () => {

    const { posts } = useSelector((store) => store.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Box>ds</Box>
    );
}

export { PostsListing };