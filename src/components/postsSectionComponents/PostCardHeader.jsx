import { usePostCard } from "../../contexts/";
import { useSelector, useDispatch } from "react-redux";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { postCardOptions } from "../../constants/postCardActionBtns";
import { Avatar, CardHeader, IconButton, Box, Typography } from '@mui/material';
import { cardHeader, cardAvatar, cardOptionIcon } from "../../utils/commonStyles";
import { followTheUser, unfollowTheUser } from "../../redux/features/user/userSlice";

const PostCardHeader = ({ post, comment }) => {

    const { stateOfPostCard, dispatchOfPostCard } = usePostCard();
    const { loggedInUser } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    return (
        <CardHeader
            sx={cardHeader}
            avatar={
                <Avatar
                    alt="AB"
                    src={post ? post.profilePic : comment.profilePic}
                    sx={cardAvatar} />
            }
            action={
                post && <IconButton
                    sx={cardOptionIcon}
                    onClick={
                        () =>
                            dispatchOfPostCard(
                                {
                                    type: "OPTIONS_POPUP",
                                    payload: post._id
                                }
                            )
                    }>
                    <Box
                        sx={{
                            backgroundColor: 'primary.dark',
                            borderRadius: 1,
                            display: stateOfPostCard.includes(post._id) ? 'block' : 'none',
                            position: 'absolute',
                            top: { xs: 5, md: -2 },
                            right: 30,
                            p: 1,
                        }}>
                        {
                            postCardOptions.map((option) =>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '0.8rem', md: '0.9rem' }
                                    }}
                                    onClick={() =>
                                        option.optionStr === "FOLLOW_USER" ?
                                            loggedInUser.following.some((user) => user.userName === post.username) ?
                                                dispatch(
                                                    unfollowTheUser(
                                                        {
                                                            followUsername: post.username
                                                        }
                                                    )
                                                ) : dispatch(
                                                    followTheUser(
                                                        {
                                                            followUsername: post.username
                                                        }
                                                    )
                                                ) : ""
                                    }>
                                    {
                                        post.username === loggedInUser.userName ?
                                            option.optionStr === "FOLLOW_USER" ?
                                                "" : option.optionName :
                                            option.optionStr !== "FOLLOW_USER" ?
                                                "" :
                                                loggedInUser.following.some((user) => user.userName === post.username) ?
                                                    "Following" : option.optionName
                                    }
                                </Typography>
                            )
                        }
                    </Box>
                    <MoreVertIcon />
                </IconButton>
            }
            title={
                post ?
                    post.firstName + " " + post.lastName + " || " + post.createdAt.slice(0, 10)
                    : comment.firstName + " " + comment.lastName
            }
            subheader={
                post ?
                    "@" + post.username :
                    "@" + comment.username
            }
        />
    );
}

export { PostCardHeader };