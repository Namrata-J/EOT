import { verticalFlexCenter } from "../../utils/commonStyles";
import LogoutIcon from '@mui/icons-material/Logout';
import { boxColor } from "../../utils/commonStyles";
import { Box, Typography, Link } from '@mui/material';
import { useSelector } from 'react-redux';
import { useSideBar } from "../../contexts/";

const SideBarLogOutBoxIconPopup = () => {

    const { loggedInUser } = useSelector((store) => store.user)
    const { sideBarLogoutPopupDisplay } = useSideBar();

    return (
        <Box
            sx={{
                ...boxColor,
                borderRadius: 2,
                position: "absolute",
                display: sideBarLogoutPopupDisplay,
                bottom: "4rem",
                right: "1rem",
                p: 2
            }}>
            <Typography
                sx={{
                    lineHeight: "2rem"
                }}>
                @{loggedInUser.userName}
            </Typography>
            <Link href="/logout">
                <Typography
                    sx={{
                        ...verticalFlexCenter,
                        cursor: "pointer",
                        fontSize: "small",
                        textAlign: "left",
                        fontWeight: "bold",
                        gap: 1,
                        '&:hover': {
                            color: 'otherColors.contradictory'
                        }
                    }}>
                    LogOut
                    <LogoutIcon sx={{ fontSize: "medium" }} />
                </Typography>
            </Link>
        </Box>
    );
}

export { SideBarLogOutBoxIconPopup };