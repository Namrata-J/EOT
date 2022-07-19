import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import { useSideBar } from "../../contexts/";

const SideBarLogOutBoxIcon = () => {

    const { handleSideBarLogoutPopupDisplay } = useSideBar();

    return (
        <MoreVertTwoToneIcon
            sx={{
                fontSize: "medium",
                position: "absolute",
                right: "0.5rem",
                '&:hover': {
                    color: 'otherColors.lightPurple',
                    cursor: 'pointer'
                }
            }}
            onClick={() => handleSideBarLogoutPopupDisplay()} />
    );
}

export { SideBarLogOutBoxIcon };