import {
    HomeTwoToneIcon,
    RocketTwoToneIcon,
    BookmarkTwoToneIcon,
    AccountCircleTwoToneIcon,
    NotificationsNoneTwoToneIcon
} from '@mui/icons-material';

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