import CardMedia from '@mui/material/CardMedia';

const PostCardMedia = ({ image }) => {
    return (
        <CardMedia
            component="img"
            height='auto'
            image={image}
            sx={{
                borderRadius: 5,
                mt: 2
            }} />
    );
}

export { PostCardMedia };