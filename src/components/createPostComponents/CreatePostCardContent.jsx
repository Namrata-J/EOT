import { useCreatePostContext } from "../../contexts/";
import { Link, CardContent, TextareaAutosize } from '@mui/material';
import { input, textArea, cardContent } from "../../utils/commonStyles";
import { CREATE_POST_TEXT } from "../../constants/createPostConstants";

const CreatePostCardContent = () => {

    const { createPostState, dispatchOfCreatePostState } = useCreatePostContext();

    return (
        <CardContent sx={cardContent}>
            <TextareaAutosize
                placeholder="Type..."
                minRows={3}
                style={{
                    ...input,
                    ...textArea,
                    fontSize: '0.9rem'
                }}
                value={createPostState.content}
                onChange={
                    (e) =>
                        dispatchOfCreatePostState(
                            {
                                type: CREATE_POST_TEXT,
                                payload: e.target.value
                            }
                        )
                } />
            {
                createPostState.media.length > 0 ?
                    createPostState.media.map(
                        (image, index) =>
                            <Link
                                key={index}
                                href={image}
                                fontFamily="Gruppo"
                                color='otherColors.lightGray'>
                                {image}
                            </Link>
                    ) : ""
            }
        </CardContent>
    );
}

export { CreatePostCardContent };