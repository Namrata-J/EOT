import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';

export const postCardActionBtns = [
    {
        icon: <FavoriteTwoToneIcon />,
        iconName: "LIKE_POST"
    },
    {
        icon: <ChatBubbleTwoToneIcon />,
        iconName: "COMMENT_ON_POST"
    },
    {
        icon: <ShareTwoToneIcon />,
        iconName: "SHARE_POST"
    },
    {
        icon: <BookmarkTwoToneIcon />,
        iconName: "BOOKMARK_POST"
    },
];

export const postCardOptions = [
    {
        optionName: "Follow",
        optionStr: "FOLLOW_USER"
    },
    {
        optionName: "Edit",
        optionStr: "EDIT_POST"
    },
    {
        optionName: "Delete",
        optionStr: "DELETE_POST"
    }
];