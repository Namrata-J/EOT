import { useEffect } from 'react';
import { PostCard } from "./PostCard";
import { useFilter } from "../../contexts/";
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { filterTagsFunc } from "../../utils/filterFunc";
import { verticalFlex } from "../../utils/commonStyles";
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts } from "../../redux/features/post/postSlice";
import { getAllUserBookmarks } from "../../redux/features/user/userSlice";

const PostsListing = () => {

    const { bookmarks } = useSelector((store) => store.user);
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

    useEffect(() => {
        dispatch(getAllUserBookmarks());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);

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
                    posts?.map((post, index) => <PostCard key={index} {...post} />) :
                    location.pathname === "/explore" ?
                        filteredPosts?.map((post, index) => <PostCard key={index} {...post} />) :
                        bookmarks?.length === 0 ?
                            <Typography sx={{
                                textAlign: 'center',
                                pt: 10,
                                fontSize: { xs: '1rem', md: '1.2rem' }
                            }}>
                                No posts are bookmarked yet
                            </Typography> :
                            bookmarks?.length && bookmarks?.map((post, index) => <PostCard key={index} {...post} />)
            }
        </Box>
    );
}

export { PostsListing };