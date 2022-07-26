import { PostCardHeader, PostCardContent } from "../postsSectionComponents/";
import { CreatePostCard } from "../createPostComponents/";
import { useCreatePostContext } from "../../contexts/";
import { card } from "../../utils/commonStyles";
import { Box, Card } from '@mui/material';
import { CommentCardActions } from "./";

const CommentsOnAPost = (post) => {

    const { editBoxWithCommentId } = useCreatePostContext();

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