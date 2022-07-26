import * as createPost from "./";
import { Card } from '@mui/material';
import { card } from "../../utils/commonStyles";

const CreatePostCard = ({ btnType, post }) => {
    return (
        <Card
            variant="outlined"
            sx={card}>
            <createPost.CreatePostCardHeader />
            <createPost.CreatePostCardContent
                btnType={
                    btnType === "POST" ? "POST" : "COMMENT"}
            />
            <createPost.CreatePostCardActions
                btnType={
                    btnType === "POST" ? "POST" : "COMMENT"}
                post={{ ...post }}
            />
            <createPost.EmojiPicker
                btnType={
                    btnType === "POST" ? "POST" : "COMMENT"}
            />
        </Card>
    );
}

export { CreatePostCard };