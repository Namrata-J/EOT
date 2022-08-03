import { useSelector } from "react-redux";
import { useModal } from "../../contexts/";
import { Box, Typography, Link, Button } from '@mui/material';
import { profileInfoLink, profilePageActionBtn, profileInfoTextSize } from "../../utils/commonStyles";

const UserBio = () => {

    const { loggedInUser } = useSelector((store) => store.user);
    const { handleOpenModal } = useModal();

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
                {loggedInUser.firstName} {loggedInUser.lastName}
            </Typography>
            <Typography sx={profileInfoTextSize}>
                @{loggedInUser.userName}
            </Typography>
            <Typography
                sx={{
                    pt: { xs: 1.5, md: 2 },
                    ...profileInfoTextSize
                }}>
                {loggedInUser.bio}
            </Typography>
            <Link
                href={loggedInUser.websiteUrl}
                target="_blank"
                sx={{
                    ...profileInfoTextSize,
                    ...profileInfoLink
                }}>
                {loggedInUser.websiteUrl}
            </Link>
            <Button
                onClick={handleOpenModal}
                variant="outlined"
                sx={profilePageActionBtn}>
                Edit Profile
            </Button>
        </Box>
    );
}

export { UserBio };