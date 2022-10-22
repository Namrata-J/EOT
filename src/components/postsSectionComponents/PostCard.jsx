import * as postCardComp from "./";
import { Card } from '@mui/material';
import { card } from "../../utils/commonStyles";
import { CommentsOnAPost } from "../commentCard/";
import { useCreatePostContext } from "../../contexts/";
import { CreatePostCard } from "../createPostComponents/";

const PostCard = (post) => {

    const { commentDialogOfCardWithId } = useCreatePostContext();

    return (
        <Card
            variant="outlined"
            sx={{
                ...card,
                boxShadow: '#091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px',
                minHeight: '5rem',
                position: 'relative'
            }}>
            <postCardComp.PostCardHeader post={post} />
            <postCardComp.PostCardContent post={post} />
            <postCardComp.PostCardActions post={{ ...post }} />
            {commentDialogOfCardWithId === post._id && <CreatePostCard btnType="COMMENT" post={{ ...post }} />}
            <CommentsOnAPost {...post} />
        </Card>
    );
}

export { PostCard };