import { Box } from '@mui/material';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserAvatar, UserBio, UserDetailsCountBox, UserPosts } from "./";
import { getAllPostsOfAUser } from "../../redux/features/post/postSlice";

const ProfileDetails = ({ profileId }) => {

    const [foundUserWithProfileId, setFoundUserWithProfileId] = useState({});
    const [userIsLoggedInUser, setUserIsLoggedInUser] = useState(false);
    const { loggedInUser, users } = useSelector((store) => store.user);
    const { userPosts } = useSelector((store) => store.post);
    const { userId } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        if (userId === profileId) {
            dispatch(getAllPostsOfAUser(
                {
                    username: loggedInUser.userName
                }));
        } else {
            const foundedUser = users.find((user) => user._id === profileId);
            setFoundUserWithProfileId(foundedUser);
            if (foundedUser) {
                dispatch(getAllPostsOfAUser(
                    {
                        username: foundedUser?.userName
                    }));
            }
        }
        setUserIsLoggedInUser(userId === profileId)
        // eslint-disable-next-line
    }, [profileId, loggedInUser, dispatch]);

    return (
        <Box sx={{ width: '100%' }}>
            <UserAvatar
                foundUserWithProfileId={foundUserWithProfileId}
                userIsLoggedInUser={userIsLoggedInUser} />
            <UserBio
                foundUserWithProfileId={foundUserWithProfileId}
                userIsLoggedInUser={userIsLoggedInUser} />
            <UserDetailsCountBox
                userPosts={userPosts}
                foundUserWithProfileId={foundUserWithProfileId}
                userIsLoggedInUser={userIsLoggedInUser} />
            <UserPosts userPosts={userPosts} profileId={profileId} />
        </Box>
    );
}

export { ProfileDetails };