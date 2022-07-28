import { useSelector } from 'react-redux';
import { Avatar, CardHeader } from '@mui/material';
import { cardHeader, cardAvatar } from "../../utils/commonStyles";

const CreatePostCardHeader = () => {

    const { loggedInUser } = useSelector((store) => store.user);

    return (
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
    );
}

export { CreatePostCardHeader };