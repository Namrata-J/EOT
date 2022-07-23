import { useDispatch } from "react-redux";
import { useCreatePostContext } from "../../contexts/";
import { createPost } from "../../redux/features/post/postSlice";
import { Button, IconButton, CardActions, } from '@mui/material';
import { actionBtn, cardActionIcon } from "../../utils/commonStyles";
import { CREATE_POST_MEDIA, CREATE_POST_CLEAR } from "../../constants/createPostConstants";
import { createPostCardActionBtns } from "../../constants/createPostCardActionBtns";

const CreatePostCardActions = () => {

    const { createPostState, dispatchOfCreatePostState, setShowEmojiPicker, showEmojiPicker } = useCreatePostContext();
    const dispatch = useDispatch();

    return (
        <CardActions disableSpacing
            sx={{
                position: 'relative'
            }}>
            {
                createPostCardActionBtns.map((cardIcon, index) =>
                    <IconButton
                        key={index}
                        sx={cardActionIcon}
                        component="label"
                        onClick={
                            () =>
                                cardIcon.iconName === "UPLOAD_EMOJI" ?
                                    setShowEmojiPicker(!showEmojiPicker) : ""
                        }>
                        {
                            cardIcon.iconName === "UPLOAD_MEDIA" ?
                                <input
                                    hidden
                                    accept="image/*"
                                    type="file"
                                    onChange={
                                        (e) =>
                                            dispatchOfCreatePostState(
                                                {
                                                    type: CREATE_POST_MEDIA,
                                                    payload: URL.createObjectURL(e.target.files[0])
                                                }
                                            )
                                    } /> : ""
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
                onClick={() => {
                    dispatch(createPost(createPostState))
                    dispatchOfCreatePostState(
                        {
                            type: CREATE_POST_CLEAR
                        }
                    )
                }}>
                Post
            </Button>
        </CardActions>
    );
}

export { CreatePostCardActions };