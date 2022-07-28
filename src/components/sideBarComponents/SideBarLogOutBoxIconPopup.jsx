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
                right: { xs: "0.5rem", md: "0rem", lg: "1rem" },
                p: { xs: 1, lg: 2 }
            }}>
            <Typography
                sx={{
                    lineHeight: { xs: "1.5rem", md: "2rem" },
                    fontSize: { xs: "0.8rem", md: "1rem" }
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
                    <LogoutIcon sx={{ fontSize: { xs: "small", md: "medium" } }} />
                </Typography>
            </Link>
        </Box>
    );
}

export { SideBarLogOutBoxIconPopup };