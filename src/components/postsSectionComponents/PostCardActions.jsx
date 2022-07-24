import { useDispatch, useSelector } from 'react-redux';
import { IconButton, CardActions, Typography } from '@mui/material';
import { cardActionIcon } from "../../utils/commonStyles";
import { postCardActionBtns } from "../../constants/postCardActionBtns";
import { likePost, dislikePost } from "../../redux/features/post/postSlice";

const PostCardActions = (post) => {

    const dispatch = useDispatch();
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
                        sx={cardActionIcon}
                        component="label"
                        onClick={
                            () => cardIcon.iconName === "LIKE_POST" ?
                                post.likes.likedBy.some((id) => id._id === loggedInUser._id) ?
                                    dispatch(dislikePost(post._id)) :
                                    dispatch(likePost(post._id)) : ""
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