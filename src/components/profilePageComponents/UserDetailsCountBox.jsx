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
                backgroundColor: 'primary.main',
                boxShadow: '#091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px',
                borderRadius: 1,
                ...flexBetweenVariant1,
            }}>
            {
                userDetailsCountList.map((item, index) =>
                    <Box
                        key={index}
                        sx={verticalFlex}>
                        <Typography
                            sx={{
                                ...profileInfoTextSize,
                                color: 'secondary.main',
                                fontWeight: 'bold',
                                fontFamily: 'Gruppo',
                            }}>
                            {item}
                        </Typography>
                        <Typography
                            sx={{
                                color: 'otherColors.contradictory',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                fontFamily: 'Gruppo',
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