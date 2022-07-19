import { useEffect } from "react";
import * as SideBarComp from "../sideBarComponents/";
import { useSelector, useDispatch } from "react-redux";
import { getSelectedUser } from "../../redux/features/user/userSlice";

const SideBar = () => {

    const { userId } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSelectedUser(userId))
    }, [userId]);

    return (
        <SideBarComp.SideBarContainer>
            <SideBarComp.SideBarList />
            <SideBarComp.SideBarLogOutBox />
        </SideBarComp.SideBarContainer>
    );
}

export { SideBar };