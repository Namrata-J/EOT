import { useDispatch } from 'react-redux';
import { followTheUser } from "../../redux/features/user/userSlice";
import { Card, Avatar, CardHeader, Typography } from '@mui/material';
import { card } from "../../utils/commonStyles";

const RecommendationCard = ({ user }) => {

    const dispatch = useDispatch();

    return (
        <Card
            variant="outlined"
            sx={{
                ...card,
                display: { xs: 'flex', md: 'block' },
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: { xs: 0, md: 1 },
                width: { xs: '8rem', md: '100%' },
                borderRadius: 2,
                minHeight: '3.2rem',
                mt: { xs: 0, md: 2 },
                position: 'relative'
            }}>
            <CardHeader
                sx={{
                    p: 1,
                    pb: { xs: 4, md: 1 },
                    flexDirection: { xs: 'column', md: 'row' },
                    '& .MuiCardHeader-title': {
                        color: 'otherColors.lightestGray',
                        fontSize: '0.8rem',
                        textAlign: { xs: 'center', md: 'left' },
                        pt: { xs: 1, md: 0 }
                    },
                    '& .MuiCardHeader-subheader': {
                        color: 'otherColors.lightGray',
                        fontSize: { xs: '0.7rem', sm: '0.8rem' },
                        textAlign: { xs: 'center', md: 'left' },
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
                            color: 'otherColors.lightGreen',
                            fontSize: { md: '0.8rem', lg: '0.9rem' },
                            p: 1,
                            pt: { md: 0 },
                            position: { xs: 'absolute', md: 'static' },
                            left: '2rem',
                            bottom: '0rem'
                        }}
                        onClick={
                            () => dispatch(
                                followTheUser(
                                    {
                                        followUsername: user.userName
                                    }
                                )
                            )
                        }
                    >
                        Follow
                    </Typography>
                }
                title={user.firstName + " " + user.lastName}
                subheader={"@" + user.userName}
            />
        </Card>
    );
}

export { RecommendationCard };