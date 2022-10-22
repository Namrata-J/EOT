import { CardLink } from "../CardLink";
import { PostCardMedia } from "../PostCardMedia";
import { cardContent } from "../../utils/commonStyles";
import { CardContent, Typography } from '@mui/material';

const PostCardContent = ({ post, comment }) => {
    return (
        <CardContent sx={cardContent}>
            <Typography
                sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    fontFamily: 'Gruppo',
                    fontWeight: 'bold',
                    color: 'otherColors.gray',
                }}>
                {post ? post.content : comment.content}
            </Typography>
            {
                post ? post.mediaLinks && post.mediaLinks.map(
                    (image, index) =>
                        <CardLink image={image} key={index} />
                ) : comment.mediaLinks && comment.mediaLinks.map(
                    (image, index) =>
                        <CardLink image={image} key={index} />
                )
            }
            {
                post ? post.media && post.media.map(
                    (image, index) =>
                        <PostCardMedia image={image} key={index} />
                ) : comment.media && comment.media.map(
                    (image, index) =>
                        <PostCardMedia image={image} key={index} />
                )
            }
        </CardContent>
    );
}

export { PostCardContent };