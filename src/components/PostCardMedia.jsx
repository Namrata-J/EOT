import CardMedia from '@mui/material/CardMedia';

const PostCardMedia = ({ image, index }) => {
    return (
        <CardMedia
            key={index}
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