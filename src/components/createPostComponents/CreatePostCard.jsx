import * as createPost from "./";
import { Card } from '@mui/material';
import { card } from "../../utils/commonStyles";

const CreatePostCard = ({ btnType, post, comment }) => {
    return (
        <Card
            variant="outlined"
            sx={{
                ...card,
            }}>
            <createPost.CreatePostCardHeader />
            <createPost.CreatePostCardContent
                btnType={
                    btnType === "POST" ? "POST" :
                        btnType === "COMMENT" ? "COMMENT" : "SAVE"
                }
            />
            <createPost.CreatePostCardActions
                btnType={
                    btnType === "POST" ? "POST" :
                        btnType === "COMMENT" ? "COMMENT" : "SAVE"
                }
                post={{ ...post }}
                comment={comment}
            />
            <createPost.EmojiPicker
                btnType={
                    btnType === "POST" ? "POST" :
                        btnType === "COMMENT" ? "COMMENT" : "SAVE"
                }
            />
        </Card>
    );
}

export { CreatePostCard };