import { useSelector } from "react-redux";
import { Box, Avatar } from '@mui/material';
import { profileCoverPicContainer, profileAvatar } from "../../utils/commonStyles";

const UserAvatar = ({ foundUserWithProfileId, userIsLoggedInUser }) => {

    const { loggedInUser } = useSelector((store) => store.user);

    return (
        <Box
            sx={{
                ...profileCoverPicContainer,
                backgroundImage: `url(${userIsLoggedInUser ? loggedInUser.coverPic : foundUserWithProfileId?.coverPic})`
            }}>
            <Avatar
                src={userIsLoggedInUser ? loggedInUser.profilePic : foundUserWithProfileId.profilePic}
                alt="user"
                sx={profileAvatar} />
        </Box>
    );
}

export { UserAvatar };