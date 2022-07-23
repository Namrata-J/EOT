import { Card } from '@mui/material';
import { card } from "../../utils/commonStyles";
import * as postCardComp from "./";

const PostCard = (post) => {
    return (
        <Card
            variant="outlined"
            sx={{
                ...card,
                minHeight: '5rem'
            }}>
            <postCardComp.PostCardHeader {...post} />
            <postCardComp.PostCardContent {...post} />
            <postCardComp.PostCardActions {...post} />
        </Card>
    );
}

export { PostCard };