import { usePostCard } from "../../contexts/";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, CardHeader, IconButton, Box, Typography } from '@mui/material';
import { cardHeader, cardAvatar, cardOptionIcon } from "../../utils/commonStyles";

const PostCardHeader = (post) => {

    const { stateOfPostCard, dispatchOfPostCard } = usePostCard();

    return (
        <CardHeader
            sx={cardHeader}
            avatar={
                <Avatar
                    alt="AB"
                    src={post.profilePic}
                    sx={cardAvatar} />
            }
            action={
                <IconButton
                    sx={cardOptionIcon}
                    onClick={
                        () =>
                            dispatchOfPostCard(
                                {
                                    type: "OPTIONS_POPUP",
                                    payload: post._id
                                }
                            )
                    }>
                    <Box
                        sx={{
                            backgroundColor: 'primary.dark',
                            borderRadius: 1,
                            display: stateOfPostCard.includes(post._id) ? 'block' : 'none',
                            position: 'absolute',
                            top: { xs: 5, md: -2 },
                            right: 30,
                            p: 1,
                        }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '0.8rem', md: '1rem' }
                            }}>
                            Follow
                        </Typography>
                    </Box>
                    <MoreVertIcon />
                </IconButton>
            }
            title={post.firstName + " " + post.lastName + " || " + post.createdAt.slice(0, 10)}
            subheader={"@" + post.username}
        />
    );
}

export { PostCardHeader };