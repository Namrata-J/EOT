import { useEffect } from "react";
import { Box } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import { UserAvatar, UserBio, UserDetailsCountBox, UserPosts } from "./";
import { getAllPostsOfAUser } from "../../redux/features/post/postSlice";

const ProfileDetails = () => {

    const { loggedInUser } = useSelector((store) => store.user);
    const { userPosts } = useSelector((store) => store.post);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPostsOfAUser(
            {
                username: loggedInUser.userName
            }));
        // eslint-disable-next-line
    }, [loggedInUser, dispatch]);

    return (
        <Box sx={{ width: '100%' }}>
            <UserAvatar />
            <UserBio />
            <UserDetailsCountBox loggedInUser={loggedInUser} userPosts={userPosts} />
            <UserPosts userPosts={userPosts} />
        </Box>
    );
}

export { ProfileDetails };