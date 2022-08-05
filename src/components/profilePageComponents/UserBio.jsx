import { useModal } from "../../contexts/";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography, Link, Button } from '@mui/material';
import { followTheUser, unfollowTheUser } from "../../redux/features/user/userSlice";
import { profileInfoLink, profilePageActionBtn, profileInfoTextSize } from "../../utils/commonStyles";

const UserBio = ({ foundUserWithProfileId, userIsLoggedInUser }) => {

    const { encodedToken } = useSelector((store) => store.auth);
    const { loggedInUser } = useSelector((store) => store.user);
    const { handleOpenModal } = useModal();
    const dispatch = useDispatch();

    return (
        <Box sx={{
            mt: { xs: 5, sm: 7 },
            pl: 1,
            position: 'relative'
        }}>
            <Typography
                sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '0.9rem', lg: '1rem' }
                }}>
                {userIsLoggedInUser ?
                    `${loggedInUser.firstName} ${loggedInUser.lastName}` :
                    `${foundUserWithProfileId.firstName} ${foundUserWithProfileId.lastName}`}
            </Typography>
            <Typography sx={profileInfoTextSize}>
                {userIsLoggedInUser ?
                    `@${loggedInUser.userName}` :
                    `@${foundUserWithProfileId.userName}`}
            </Typography>
            <Typography
                sx={{
                    pt: { xs: 1.5, md: 2 },
                    ...profileInfoTextSize
                }}>
                {userIsLoggedInUser ?
                    loggedInUser.bio :
                    foundUserWithProfileId.bio}
            </Typography>
            <Link
                href={
                    userIsLoggedInUser ?
                        loggedInUser.websiteUrl :
                        foundUserWithProfileId.websiteUrl
                }
                target="_blank"
                sx={{
                    ...profileInfoTextSize,
                    ...profileInfoLink
                }}>
                {userIsLoggedInUser ?
                    loggedInUser.websiteUrl :
                    foundUserWithProfileId.websiteUrl}
            </Link>
            {
                userIsLoggedInUser ?
                    <Button
                        onClick={handleOpenModal}
                        variant="outlined"
                        sx={profilePageActionBtn}>
                        Edit Profile
                    </Button> :
                    <Button
                        variant="outlined"
                        sx={profilePageActionBtn}
                        onClick={() => {
                            loggedInUser.following.some((user) => user.userName === foundUserWithProfileId.userName) ?
                                dispatch(
                                    unfollowTheUser(
                                        {
                                            followUsername: foundUserWithProfileId.userName,
                                            encodedToken: encodedToken
                                        }
                                    )
                                ) :
                                dispatch(
                                    followTheUser(
                                        {
                                            followUsername: foundUserWithProfileId.userName,
                                            encodedToken: encodedToken
                                        }
                                    )
                                )
                        }}>
                        {loggedInUser.following.some((user) => user.userName === foundUserWithProfileId.userName) ?
                            "Following" :
                            "Follow"}
                    </Button>
            }
        </Box>
    );
}

export { UserBio };