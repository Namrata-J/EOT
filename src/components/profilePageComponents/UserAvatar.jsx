import { useSelector } from "react-redux";
import { Box, Avatar } from '@mui/material';
import { profileCoverPicContainer, profileAvatar } from "../../utils/commonStyles";

const UserAvatar = () => {

    const { loggedInUser } = useSelector((store) => store.user);

    return (
        <Box
            sx={{
                ...profileCoverPicContainer,
                backgroundImage: `url(${loggedInUser.coverPic})`
            }}>
            <Avatar
                src={loggedInUser.profilePic}
                alt="user"
                sx={profileAvatar} />
        </Box>
    );
}

export { UserAvatar };