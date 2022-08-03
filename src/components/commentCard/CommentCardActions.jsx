import { useSelector, useDispatch } from 'react-redux';
import { useCreatePostContext } from "../../contexts/";
import { commentCardActionIcon } from "../../utils/commonStyles";
import { CardActions, IconButton, Typography } from '@mui/material';
import { commentCardActionBtns } from "../../constants/commentCardActionBtns";
import { COMMENT_TEXT, COMMENT_MEDIA } from "../../constants/createPostConstants";
import { upVoteComment, downVoteComment, deleteComment } from "../../redux/features/comment/commentSlice";

const CommentCardActions = ({ post, comment }) => {

    const { encodedToken } = useSelector((store) => store.auth);
    const { loggedInUser } = useSelector((store) => store.user);
    const { setEditBoxWithCommentId, dispatchOfCommentState } = useCreatePostContext();
    const dispatch = useDispatch();

    return (
        <CardActions disableSpacing
            sx={{
                justifyContent: 'flex-start',
                p: 0,
                pl: 1,
                gap: { sm: 2, md: 3 }
            }}>
            {
                commentCardActionBtns.map((actionIcon, index) =>
                    <IconButton
                        key={index}
                        sx={
                            actionIcon.iconName === "UPVOTE_COMMENT" &&
                                comment.votes.upvotedBy.some((user) => user._id === loggedInUser._id) ?
                                {
                                    color: 'otherColors.lightPurple',
                                    ...commentCardActionIcon
                                } :
                                commentCardActionIcon
                        }
                        component="label"
                        onClick={() =>
                            actionIcon.iconName === "UPVOTE_COMMENT" ?
                                comment.votes.upvotedBy.some((user) => user._id === loggedInUser._id) ?
                                    dispatch(downVoteComment(
                                        {
                                            postId: post._id,
                                            commentId: comment._id,
                                            encodedToken: encodedToken
                                        })
                                    ) :
                                    dispatch(upVoteComment(
                                        {
                                            postId: post._id,
                                            commentId: comment._id,
                                            encodedToken: encodedToken
                                        })
                                    ) :
                                actionIcon.iconName === "EDIT_COMMENT" ?
                                    (
                                        setEditBoxWithCommentId(comment._id),
                                        dispatchOfCommentState({ type: COMMENT_TEXT, payload: comment.content }),
                                        dispatchOfCommentState({ type: COMMENT_MEDIA, payload: comment.mediaLinks })
                                    ) :
                                    dispatch(deleteComment(
                                        {
                                            postId: post._id,
                                            commentId: comment._id,
                                            encodedToken: encodedToken
                                        })
                                    )
                        }
                    >
                        <Typography
                            sx={{
                                color: 'otherColors.lightestGray',
                                fontSize: { xs: '0.8rem', md: '0.9rem' },
                                pr: 1,
                                pt: '4px'
                            }}
                        >
                            {
                                actionIcon.iconName === "UPVOTE_COMMENT" &&
                                    comment.votes.upvotedBy.length > 0 ?
                                    comment.votes.upvotedBy.length : ""
                            }
                        </Typography>
                        {
                            loggedInUser.userName === comment.username ?
                                actionIcon.icon :
                                actionIcon.iconName === "UPVOTE_COMMENT" ?
                                    actionIcon.icon : ""
                        }
                    </IconButton>
                )
            }
        </CardActions>
    );
}

export { CommentCardActions };