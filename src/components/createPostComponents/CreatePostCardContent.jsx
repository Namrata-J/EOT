import { CardLink } from "../CardLink";
import { useCreatePostContext } from "../../contexts/";
import { CardContent, TextareaAutosize } from '@mui/material';
import { useAppTheme } from "../../providers/AppThemeProvider";
import { input, textArea, cardContent } from "../../utils/commonStyles";
import { CREATE_POST_TEXT, COMMENT_TEXT } from "../../constants/createPostConstants";

const CreatePostCardContent = ({ btnType }) => {

    const {
        commentState,
        createPostState,
        dispatchOfCommentState,
        dispatchOfCreatePostState } = useCreatePostContext();
    const { mode } = useAppTheme();

    return (
        <CardContent sx={cardContent}>
            <TextareaAutosize
                placeholder="Type..."
                minRows={3}
                style={
                    mode === 'light' ? {
                        ...input,
                        ...textArea,
                        fontSize: '1rem'
                    } :
                        {
                            ...input,
                            ...textArea,
                            color: '#ffffff',
                            fontWeight: 'light',
                            fontSize: '1rem'
                        }
                }
                value={btnType === "POST" ? createPostState.content : commentState.content}
                onChange={
                    (e) =>
                        btnType === "POST" ?
                            dispatchOfCreatePostState(
                                {
                                    type: CREATE_POST_TEXT,
                                    payload: e.target.value
                                }
                            ) :
                            dispatchOfCommentState(
                                {
                                    type: COMMENT_TEXT,
                                    payload: e.target.value
                                }
                            )
                } />
            {
                createPostState.mediaLinks.length > 0 && btnType === "POST" ?
                    createPostState.mediaLinks.map(
                        (image, index) =>
                            <CardLink image={image} index={index} />
                    ) :
                    (
                        (commentState.mediaLinks.length > 0 && btnType === "COMMENT") ||
                        (commentState.mediaLinks.length > 0 && btnType === "SAVE")
                    ) ?
                        commentState.mediaLinks.map(
                            (image, index) =>
                                <CardLink image={image} index={index} />
                        ) : ""
            }
        </CardContent>
    );
}

export { CreatePostCardContent };