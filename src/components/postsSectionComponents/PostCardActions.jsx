import { useDispatch, useSelector } from 'react-redux';
import { cardActionIcon } from "../../utils/commonStyles";
import { useCreatePostContext, usePostCard } from "../../contexts/";
import { COMMENT_CLEAR } from "../../constants/createPostConstants";
import { IconButton, CardActions, Typography } from '@mui/material';
import { postCardActionBtns } from "../../constants/postCardActionBtns";
import { likePost, dislikePost } from "../../redux/features/post/postSlice";
import { addToUserBookmarks, removeFromUserBookmarks } from "../../redux/features/user/userSlice";

const PostCardActions = ({ post }) => {

    const dispatch = useDispatch();
    const { setShowEditPostBox } = usePostCard();
    const {
        setCommentDialogOfCardWithId,
        commentDialogOfCardWithId,
        dispatchOfCommentState,
        setShowEmojiPicker } = useCreatePostContext();
    const { bookmarks } = useSelector((store) => store.user)
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
                            (
                                post.likes.likedBy.some((id) => id._id === loggedInUser._id) &&
                                cardIcon.iconName === "LIKE_POST"
                            ) ||
                                (
                                    bookmarks.some((bookmarkPost) => bookmarkPost._id === post._id) &&
                                    cardIcon.iconName === "BOOKMARK_POST"
                                ) ?
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
                                            setShowEmojiPicker(false),
                                            setShowEditPostBox(false)
                                        ) :
                                        (
                                            setCommentDialogOfCardWithId(post._id),
                                            setShowEmojiPicker(false)
                                        ) :
                                    cardIcon.iconName === "BOOKMARK_POST" ?
                                        bookmarks.some((bookmarkPost) => bookmarkPost._id === post._id) ?
                                            dispatch(removeFromUserBookmarks(post._id)) :
                                            dispatch(addToUserBookmarks(post._id)) : ""
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