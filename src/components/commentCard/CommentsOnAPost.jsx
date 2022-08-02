import { PostCardHeader, PostCardContent } from "../postsSectionComponents/";
import { editComment } from "../../redux/features/comment/commentSlice";
import { useCreatePostContext, useModal } from "../../contexts/";
import { CreatePostCard } from "../createPostComponents/";
import { useSelector, useDispatch } from 'react-redux';
import { card } from "../../utils/commonStyles";
import { Box, Card } from '@mui/material';
import { CommentCardActions } from "./";
import { useEffect } from "react";

const CommentsOnAPost = (post) => {

    const { loggedInUser } = useSelector((store) => store.user);
    const { editBoxWithCommentId } = useCreatePostContext();
    const { editProfileState } = useModal();
    const dispatch = useDispatch();

    useEffect(() => {
        post.comments.map((comment) => comment.username === loggedInUser.userName ?
            dispatch(editComment(
                {
                    postId: post._id,
                    commentId: comment._id,
                    editedData: {
                        profilePic: editProfileState.profilePic,
                        firstName: editProfileState.firstName,
                        lastName: editProfileState.lastName,
                    }
                }
            )) : ""
        )
        // eslint-disable-next-line
    }, [loggedInUser, dispatch]);

    return (
        <Box>
            {
                post.comments.length > 0 ? post.comments.map((comment, index) =>
                    <Card
                        variant="outlined"
                        key={index}
                        sx={{
                            ...card,
                            minHeight: '4rem',
                            p: { xs: 2, sm: 3 },
                            pt: { xs: 0, sm: 0 },
                            pb: { xs: 0, sm: 1 }
                        }}>
                        <PostCardHeader comment={comment} />
                        <PostCardContent comment={comment} />
                        <CommentCardActions post={post} comment={comment} />
                        {editBoxWithCommentId === comment._id && <CreatePostCard btnType="SAVE" post={{ ...post }} comment={comment} />}
                    </Card>
                ) : ""
            }
        </Box>
    );
}

export { CommentsOnAPost };