import { useEffect } from "react";
import { useModal } from "../../contexts/";
import { Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { verticalFlex } from "../../utils/commonStyles";
import { PostCard } from "../postsSectionComponents/PostCard";
import { editPost } from "../../redux/features/post/postSlice";

const UserPosts = ({ userPosts, profileId }) => {

    const { encodedToken, userId } = useSelector((store) => store.auth);
    const { loggedInUser } = useSelector((store) => store.user);
    const { editProfileState } = useModal();
    const dispatch = useDispatch();

    useEffect(() => {
        if (profileId === userId) {
            userPosts?.map((post) =>
                dispatch(editPost(
                    {
                        postId: post._id,
                        editedPostData: {
                            profilePic: editProfileState?.profilePic,
                            firstName: editProfileState?.firstName,
                            lastName: editProfileState?.lastName,
                        },
                        encodedToken: encodedToken
                    }
                ))
            )
        }
        // eslint-disable-next-line
    }, [loggedInUser, dispatch]);

    return (
        <Box
            sx={{
                ...verticalFlex,
                gap: 2
            }}>
            <Typography
                sx={{
                    color: 'secondary.main',
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    fontWeight: 'bold',
                    fontFamily: 'Gruppo',
                    p: 1.5,
                    pb: 0
                }}>
                Recent Posts
            </Typography>
            {
                userPosts?.map((post, index) =>
                    <PostCard {...post} key={index} />
                )
            }
        </Box>
    );
}

export { UserPosts };