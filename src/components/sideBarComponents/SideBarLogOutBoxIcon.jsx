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
                    color: 'secondary.main',
                    cursor: 'pointer'
                }
            }}
            onClick={handleSideBarLogoutPopupDisplay} />
    );
}

export { SideBarLogOutBoxIcon };