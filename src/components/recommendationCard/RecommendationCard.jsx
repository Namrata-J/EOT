import { followTheUser, unfollowTheUser } from "../../redux/features/user/userSlice";
import { Card, Avatar, CardHeader, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { card } from "../../utils/commonStyles";
import { useNavigate } from "react-router-dom";

const RecommendationCard = ({ user }) => {

    const { encodedToken } = useSelector((store) => store.auth);
    const { loggedInUser } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <Card
            variant="outlined"
            sx={{
                ...card,
                display: { xs: 'flex', md: 'block' },
                cursor: 'pointer',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: { xs: 0, md: 1 },
                width: { xs: '8rem', md: '100%' },
                borderRadius: 2,
                minHeight: '3.2rem',
                mt: { xs: 0, md: 2 },
                position: 'relative'
            }}
            onClick={() => navigate(`/profile/${user._id}`)}>
            <CardHeader
                sx={{
                    p: 1,
                    pb: { xs: 4, md: 1 },
                    flexDirection: { xs: 'column', md: 'row' },
                    boxShadow: '#091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px',
                    borderRadius: 2,
                    '& .MuiCardHeader-title': {
                        color: 'secondary.main',
                        fontSize: '0.8rem',
                        fontFamily: 'Gruppo',
                        fontWeight: 'bold',
                        textAlign: { xs: 'center', md: 'left' },
                        pt: { xs: 1, md: 0 }
                    },
                    '& .MuiCardHeader-subheader': {
                        color: 'otherColors.gray',
                        fontFamily: 'Gruppo',
                        fontWeight: 'bold',
                        fontSize: { xs: '0.7rem', sm: '0.8rem' },
                        textAlign: { xs: 'center', md: 'left' },
                    },
                    '&:hover': {
                        backgroundColor: 'primary.light',
                        borderRadius: 2
                    }
                }}
                avatar={
                    <Avatar
                        src={user?.profilePic}
                        sx={{
                            width: 40,
                            height: 40
                        }}>
                        user
                    </Avatar>
                }
                action={
                    <Typography
                        sx={{
                            cursor: 'pointer',
                            color: 'otherColors.green',
                            fontSize: { md: '0.8rem', lg: '0.9rem' },
                            fontFamily: 'Gruppo',
                            fontWeight: 'bold',
                            p: 1,
                            pt: { md: 0 },
                            position: { xs: 'absolute', md: 'static' },
                            left: '2rem',
                            bottom: '0rem'
                        }}
                        onClick={
                            (e) =>
                                user.followers.some((follower) => follower._id === loggedInUser._id) ?
                                    (
                                        dispatch(
                                            unfollowTheUser(
                                                {
                                                    followUsername: user.userName,
                                                    encodedToken: encodedToken
                                                }
                                            )
                                        ),
                                        e.stopPropagation()
                                    ) :
                                    (
                                        dispatch(
                                            followTheUser(
                                                {
                                                    followUsername: user.userName,
                                                    encodedToken: encodedToken
                                                }
                                            )
                                        ),
                                        e.stopPropagation()
                                    )
                        }
                    >
                        {
                            user.followers.some((follower) => follower._id === loggedInUser._id) ?
                                "Unfollow" : "Follow"
                        }
                    </Typography>
                }
                title={user.firstName + " " + user.lastName}
                subheader={"@" + user.userName}
            />
        </Card>
    );
}

export { RecommendationCard };