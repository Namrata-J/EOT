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
        option: "FOLLOW",
        optionStr: "FOLLOW_USER"
    },
    {
        option: "EDIT",
        optionStr: "EDIT_POST"
    },
    {
        option: "DELETE",
        optionStr: "DELETE_POST"
    }
];