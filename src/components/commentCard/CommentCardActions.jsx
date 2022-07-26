import { useSelector, useDispatch } from 'react-redux';
import { commentCardActionIcon } from "../../utils/commonStyles";
import { CardActions, IconButton, Typography } from '@mui/material';
import { commentCardActionBtns } from "../../constants/commentCardActionBtns";
import { upVoteComment, downVoteComment } from "../../redux/features/comment/commentSlice";

const CommentCardActions = ({ post, comment }) => {

    const { loggedInUser } = useSelector((store) => store.user);
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
                                            commentId: comment._id
                                        })
                                    ) :
                                    dispatch(upVoteComment(
                                        {
                                            postId: post._id,
                                            commentId: comment._id
                                        })
                                    ) : ""
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