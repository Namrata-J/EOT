import { CardContent, Typography, Link, CardMedia } from '@mui/material';
import { cardContent } from "../../utils/commonStyles";

const PostCardContent = (post) => {
    return (
        <CardContent sx={cardContent}>
            <Typography
                sx={{
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    color: 'otherColors.lightestGray'
                }}>{post.content}
            </Typography>
            {
                post.mediaLinks && post.mediaLinks.map(
                    (image, index) =>
                        <Link
                            key={index}
                            href={image}
                            fontFamily="Gruppo"
                            color='otherColors.lightGray'>
                            {image}
                        </Link>
                )
            }
            {
                post.media && post.media.map(
                    (image, index) =>
                        <CardMedia
                            key={index}
                            component="img"
                            height='auto'
                            image={image}
                            sx={{
                                borderRadius: 5,
                                mt: 2
                            }} />
                )
            }
        </CardContent>
    );
}

export { PostCardContent };