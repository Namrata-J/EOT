import * as sideBarComp from "./";
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';

const SideBarLogOutBox = () => {

    const { loggedInUser } = useSelector((store) => store.user)

    return (
        <sideBarComp.SideBarLogOutBoxContainer>
            <sideBarComp.SideBarLogOutBoxIconPopup />
            <Avatar alt="AB" src={loggedInUser.profilePic} />
            <sideBarComp.SideBarLogOutBoxText />
            <sideBarComp.SideBarLogOutBoxIcon />
        </sideBarComp.SideBarLogOutBoxContainer>
    );
}

export { SideBarLogOutBox };