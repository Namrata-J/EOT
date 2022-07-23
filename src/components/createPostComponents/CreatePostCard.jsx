import * as createPost from "./";
import { Card } from '@mui/material';
import { card } from "../../utils/commonStyles";

const CreatePostCard = () => {
    return (
        <Card
            variant="outlined"
            sx={card}>
            <createPost.CreatePostCardHeader />
            <createPost.CreatePostCardContent />
            <createPost.CreatePostCardActions />
        </Card>
    );
}

export { CreatePostCard };