import { useDispatch } from "react-redux";
import { useCreatePostContext } from "../../contexts/";
import { createPost } from "../../redux/features/post/postSlice";
import { Button, IconButton, CardActions, } from '@mui/material';
import { actionBtn, cardActionIcon } from "../../utils/commonStyles";
import { addComment, editComment } from "../../redux/features/comment/commentSlice";
import { createPostCardActionBtns } from "../../constants/createPostCardActionBtns";
import { CREATE_POST_MEDIA, CREATE_POST_CLEAR, COMMENT_MEDIA, COMMENT_CLEAR } from "../../constants/createPostConstants";

const CreatePostCardActions = ({ btnType, post, comment }) => {
    const {
        setShowCommentBoxEmojiPicker,
        setCommentDialogOfCardWithId,
        dispatchOfCreatePostState,
        showCommentBoxEmojiPicker,
        setEditBoxWithCommentId,
        dispatchOfCommentState,
        setShowEmojiPicker,
        createPostState,
        showEmojiPicker,
        commentState } = useCreatePostContext();
    const dispatch = useDispatch();

    return (
        <CardActions disableSpacing
            sx={{ position: 'relative' }}>
            {
                createPostCardActionBtns.map((cardIcon, index) =>
                    <IconButton
                        key={index}
                        sx={cardActionIcon}
                        component="label"
                        onClick={
                            () =>
                                cardIcon.iconName === "UPLOAD_EMOJI" ?
                                    btnType === "POST" ?
                                        (
                                            setShowEmojiPicker(!showEmojiPicker),
                                            setCommentDialogOfCardWithId(""),
                                            dispatchOfCommentState({
                                                type: COMMENT_CLEAR
                                            })
                                        ) :
                                        setShowCommentBoxEmojiPicker(!showCommentBoxEmojiPicker) : ""
                        }>
                        {
                            cardIcon.iconName === "UPLOAD_MEDIA" &&
                            <input
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={
                                    (e) =>
                                        btnType === "POST" ?
                                            dispatchOfCreatePostState(
                                                {
                                                    type: CREATE_POST_MEDIA,
                                                    payload: URL.createObjectURL(e.target.files[0])
                                                }
                                            ) :
                                            dispatchOfCommentState(
                                                {
                                                    type: COMMENT_MEDIA,
                                                    payload: URL.createObjectURL(e.target.files[0])
                                                }
                                            )
                                } />
                        }
                        {cardIcon.icon}
                    </IconButton>
                )
            }
            <Button
                variant="outlined"
                sx={{
                    ...actionBtn,
                    borderRadius: { xs: 5, sm: 2, md: 5 },
                    position: 'absolute',
                    right: '0.6rem'
                }}
                onClick={() =>
                    btnType === "POST" ?
                        (
                            dispatch(createPost(createPostState)),
                            dispatchOfCreatePostState(
                                {
                                    type: CREATE_POST_CLEAR
                                }
                            ),
                            setShowEmojiPicker(false)
                        ) : btnType === "COMMENT" ?
                            (
                                dispatch(addComment(
                                    {
                                        postId: post._id,
                                        commentData: commentState
                                    }
                                )),
                                dispatchOfCommentState(
                                    {
                                        type: COMMENT_CLEAR
                                    }
                                ),
                                setShowCommentBoxEmojiPicker(false),
                                setCommentDialogOfCardWithId("")
                            ) :
                            (
                                dispatch(editComment(
                                    {
                                        postId: post._id,
                                        commentId: comment._id,
                                        editedData: commentState
                                    }
                                )),
                                dispatchOfCommentState(
                                    {
                                        type: COMMENT_CLEAR
                                    }
                                ),
                                setShowCommentBoxEmojiPicker(false),
                                setEditBoxWithCommentId("")
                            )
                }>
                {btnType}
            </Button>
        </CardActions >
    );
}

export { CreatePostCardActions };