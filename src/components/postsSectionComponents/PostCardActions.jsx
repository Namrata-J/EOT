import { useDispatch, useSelector } from 'react-redux';
import { useCreatePostContext } from "../../contexts/";
import { cardActionIcon } from "../../utils/commonStyles";
import { COMMENT_CLEAR } from "../../constants/createPostConstants";
import { IconButton, CardActions, Typography } from '@mui/material';
import { postCardActionBtns } from "../../constants/postCardActionBtns";
import { likePost, dislikePost } from "../../redux/features/post/postSlice";

const PostCardActions = ({ post }) => {

    const dispatch = useDispatch();
    const {
        setCommentDialogOfCardWithId,
        commentDialogOfCardWithId,
        dispatchOfCommentState,
        setShowEmojiPicker } = useCreatePostContext();
    const { loggedInUser } = useSelector((store) => store.user)

    return (
        <CardActions disableSpacing
            sx={{
                justifyContent: 'space-around'
            }}>
            {
                postCardActionBtns.map((cardIcon, index) =>
                    <IconButton
                        key={index}
                        sx={
                            post.likes.likedBy.some((id) => id._id === loggedInUser._id) &&
                                cardIcon.iconName === "LIKE_POST" ?
                                {
                                    ...cardActionIcon,
                                    color: 'otherColors.lightPurple'
                                } :
                                { ...cardActionIcon }
                        }
                        component="label"
                        onClick={
                            () => cardIcon.iconName === "LIKE_POST" ?
                                post.likes.likedBy.some((id) => id._id === loggedInUser._id) ?
                                    dispatch(dislikePost(post._id)) :
                                    dispatch(likePost(post._id)) :
                                cardIcon.iconName === "COMMENT_ON_POST" ?
                                    commentDialogOfCardWithId === post._id ?
                                        (
                                            setCommentDialogOfCardWithId(""),
                                            dispatchOfCommentState({
                                                type: COMMENT_CLEAR
                                            }),
                                            setShowEmojiPicker(false)
                                        ) :
                                        (
                                            setCommentDialogOfCardWithId(post._id),
                                            setShowEmojiPicker(false)
                                        ) : ""
                        }>
                        <Typography
                            sx={{
                                color: 'otherColors.lightestGray',
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                pr: { xs: 0.5, md: 1 }
                            }}>
                            {
                                cardIcon.iconName === "LIKE_POST" && post.likes.likeCount > 0 ?
                                    post.likes.likeCount : ""
                            }
                        </Typography>
                        {cardIcon.icon}
                    </IconButton>
                )
            }
        </CardActions>
    );
}

export { PostCardActions };