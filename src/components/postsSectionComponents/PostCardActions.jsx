import { IconButton, CardActions, } from '@mui/material';
import { cardActionIcon } from "../../utils/commonStyles";
import { postCardActionBtns } from "../../constants/postCardActionBtns";

const PostCardActions = (post) => {
    return (
        <CardActions disableSpacing
            sx={{
                justifyContent: 'space-around'
            }}>
            {
                postCardActionBtns.map((cardIcon, index) =>
                    <IconButton
                        key={index}
                        sx={cardActionIcon}
                        component="label">
                        {cardIcon.icon}
                    </IconButton>
                )
            }
        </CardActions>
    );
}

export { PostCardActions };