import { useSelector } from "react-redux";
import { Box, Typography } from '@mui/material';
import { profileInfoTextSize, flexBetweenVariant1, verticalFlex } from "../../utils/commonStyles";

const UserDetailsCountBox = ({ userPosts, foundUserWithProfileId, userIsLoggedInUser }) => {

    const { loggedInUser } = useSelector((store) => store.user);
    const userDetailsCountList = ["Posts", "Followers", "Following"];

    return (
        <Box
            sx={{
                p: 1,
                m: 4,
                borderRadius: 1,
                ...flexBetweenVariant1,
                border: '1px solid #393148'
            }}>
            {
                userDetailsCountList.map((item, index) =>
                    <Box
                        key={index}
                        sx={verticalFlex}>
                        <Typography
                            sx={{
                                ...profileInfoTextSize,
                                fontWeight: 'bold'
                            }}>
                            {item}
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center'
                            }} >
                            {
                                index === 0 ?
                                    userPosts?.length :
                                    index === 1 ?
                                        userIsLoggedInUser ?
                                            loggedInUser?.followers?.length :
                                            foundUserWithProfileId?.followers?.length :
                                        userIsLoggedInUser ?
                                            loggedInUser?.following?.length :
                                            foundUserWithProfileId?.following?.length
                            }
                        </Typography>
                    </Box>
                )
            }
        </Box>
    );
}

export { UserDetailsCountBox };