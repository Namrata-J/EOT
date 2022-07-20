import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import RocketTwoToneIcon from '@mui/icons-material/RocketTwoTone';
import BookmarkTwoToneIcon from '@mui/icons-material/BookmarkTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import NotificationsNoneTwoToneIcon from '@mui/icons-material/NotificationsNoneTwoTone';

export const sideBarLinks = [
    {
        pathIcon: <HomeTwoToneIcon />,
        pathName: "Home",
        pathLink: "/home"
    },
    {
        pathIcon: <RocketTwoToneIcon />,
        pathName: "Explore",
        pathLink: "/explore"
    },
    {
        pathIcon: <BookmarkTwoToneIcon />,
        pathName: "Bookmark",
        pathLink: "/bookmark"
    },
    {
        pathIcon: <NotificationsNoneTwoToneIcon />,
        pathName: "Notification",
        pathLink: "/notification"
    },
    {
        pathIcon: <AccountCircleTwoToneIcon />,
        pathName: "Profile",
        pathLink: "/profile"
    }
];