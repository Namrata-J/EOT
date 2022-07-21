import {
    card,
    input,
    textArea,
    cardHeader,
    cardAvatar,
    cardContent,
    actionBtn,
    cardActionIcon
} from "../../utils/commonStyles";
import {
    Card,
    Avatar,
    Button,
    CardHeader,
    IconButton,
    CardActions,
    CardContent,
    TextareaAutosize,
} from '@mui/material';
import {
    createPostCardActionBtns
} from "../../constants/createPostCardActionBtns";
import { useSelector } from 'react-redux';

const CreatePostCard = () => {

    const { loggedInUser } = useSelector((store) => store.user)

    return (
        <Card
            variant="outlined"
            sx={card}>
            <CardHeader
                sx={cardHeader}
                avatar={
                    <Avatar
                        alt="AB"
                        src={loggedInUser.profilePic}
                        sx={cardAvatar} />
                }
                title={loggedInUser.firstName + " " + loggedInUser.lastName}
                subheader={"@" + loggedInUser.userName}
            />
            <CardContent sx={cardContent}>
                <TextareaAutosize
                    placeholder="Type..."
                    minRows={3}
                    style={{
                        ...input,
                        ...textArea
                    }} />
            </CardContent>
            <CardActions disableSpacing
                sx={{
                    position: 'relative'
                }}>
                {
                    createPostCardActionBtns.map((cardIcon, index) =>
                        <IconButton
                            key={index}
                            sx={cardActionIcon}>
                            {cardIcon.icon}
                        </IconButton>
                    )
                }
                <Button
                    variant="outlined"
                    sx={{
                        ...actionBtn,
                        borderRadius: { xs: 5, sm: 2, md: 5 },
                        position: 'absolute',
                        right: '0.6rem'
                    }}>
                    Post
                </Button>
            </CardActions>
        </Card>
    );
}

export { CreatePostCard };