import { Box, Typography } from '@mui/material';
import { profileInfoTextSize, flexBetweenVariant1, verticalFlex } from "../../utils/commonStyles";

const UserDetailsCountBox = ({ loggedInUser, userPosts }) => {

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
                                        loggedInUser?.followers?.length :
                                        loggedInUser?.following?.length
                            }
                        </Typography>
                    </Box>
                )
            }
        </Box>
    );
}

export { UserDetailsCountBox };