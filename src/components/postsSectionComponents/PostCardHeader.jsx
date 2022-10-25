import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { deletePost } from "../../redux/features/post/postSlice";
import { usePostCard, useCreatePostContext } from "../../contexts/";
import { postCardOptions } from "../../constants/postCardActionBtns";
import { Avatar, CardHeader, IconButton, Box, Typography } from '@mui/material';
import { COMMENT_TEXT, COMMENT_MEDIA } from "../../constants/createPostConstants";
import { cardHeader, cardAvatar, cardOptionIcon } from "../../utils/commonStyles";
import { followTheUser, unfollowTheUser } from "../../redux/features/user/userSlice";

const PostCardHeader = ({ post, comment }) => {

    const { setCommentDialogOfCardWithId, dispatchOfCommentState } = useCreatePostContext();
    const { stateOfPostCard, dispatchOfPostCard, setShowEditPostBox } = usePostCard();
    const { encodedToken } = useSelector((store) => store.auth);
    const { loggedInUser } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <CardHeader
            sx={{ ...cardHeader, cursor: 'pointer' }}
            avatar={
                <Avatar
                    alt="AB"
                    src={post ? post.profilePic : comment.profilePic}
                    sx={cardAvatar} />
            }
            onClick={() => navigate(`/post/${post._id}`)}
            action={
                post && <IconButton
                    sx={cardOptionIcon}
                    onClick={
                        (e) => {
                            dispatchOfPostCard(
                                {
                                    type: "OPTIONS_POPUP",
                                    payload: post._id
                                }
                            )
                            e.stopPropagation();
                        }
                    }>
                    <Box
                        sx={{
                            backgroundColor: 'primary.light',
                            boxShadow: '#091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px',
                            borderRadius: 1,
                            display: stateOfPostCard.includes(post._id) ? 'block' : 'none',
                            position: 'absolute',
                            top: { xs: 5, md: -2 },
                            right: 30,
                            p: 1,
                        }}>
                        {
                            postCardOptions.map((option, index) =>
                                <Typography
                                    key={index}
                                    sx={{
                                        fontFamily: 'Gruppo',
                                        fontWeight: 'bold',
                                        fontSize: { xs: '0.8rem', md: '0.9rem' },
                                        color: 'otherColors.gray'
                                    }}
                                    onClick={() =>
                                        option.optionStr === "FOLLOW_USER" ?
                                            loggedInUser.following.some((user) => user.userName === post.username) ?
                                                dispatch(
                                                    unfollowTheUser(
                                                        {
                                                            followUsername: post.username,
                                                            encodedToken: encodedToken
                                                        }
                                                    )
                                                ) : dispatch(
                                                    followTheUser(
                                                        {
                                                            followUsername: post.username,
                                                            encodedToken: encodedToken
                                                        }
                                                    )
                                                ) :
                                            option.optionStr === "EDIT_POST" ?
                                                (
                                                    setCommentDialogOfCardWithId(post._id),
                                                    dispatchOfCommentState({
                                                        type: COMMENT_TEXT,
                                                        payload: post.content
                                                    }),
                                                    dispatchOfCommentState({
                                                        type: COMMENT_MEDIA,
                                                        payload: post.mediaLinks
                                                    }),
                                                    setShowEditPostBox(true)
                                                ) :
                                                dispatch(deletePost(
                                                    {
                                                        postId: post._id,
                                                        encodedToken: encodedToken
                                                    }
                                                ))
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