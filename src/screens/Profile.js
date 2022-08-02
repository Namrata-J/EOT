import { ModalBox, ModalTextField, ModalTextArea, ModalActionBtn, ModalImageInput } from "../components/modalChildComponents/";
import { getSelectedUser } from "../redux/features/user/userSlice";
import { INITIAL_EDIT_STATE } from "../constants/modalConstants";
import { pageBoxStyling } from "../utils/commonStyles";
import { useSelector, useDispatch } from "react-redux";
import { Box, ButtonGroup } from '@mui/material';
import { useParams } from "react-router-dom";
import { utilComp } from "../components/";
import { useModal } from "../contexts/";
import { useEffect } from "react";

const ProfilePage = () => {

    const { loggedInUser } = useSelector((store) => store.user);
    const { dispatchOfEditProfile } = useModal();
    const dispatch = useDispatch();
    const { profileId } = useParams;

    useEffect(() => {
        if (profileId === loggedInUser._id) {
            dispatchOfEditProfile({
                type: INITIAL_EDIT_STATE,
                payload: loggedInUser
            })
        } else {
            dispatch(getSelectedUser(profileId))
        }
        // eslint-disable-next-line
    }, [loggedInUser, profileId]);

    return (
        <utilComp.PageContainer>
            <utilComp.Header />
            <Box sx={pageBoxStyling}>
                <utilComp.SideBar />
                <utilComp.ProfileSection />
                <utilComp.FollowRecommendationSection />
                <ModalBox>
                    <ModalImageInput
                        coverPic={loggedInUser?.coverPic}
                        profilePic={loggedInUser.profilePic} />
                    <ModalTextField
                        type="text"
                        label="Firstname"
                        uniqueId="FIRSTNAME"
                        defaultValue={loggedInUser?.firstName} />
                    <ModalTextField
                        type="text"
                        label="Lastname"
                        uniqueId="LASTNAME"
                        defaultValue={loggedInUser?.lastName} />
                    <ModalTextArea defaultValue={loggedInUser?.bio} />
                    <ModalTextField
                        type="text"
                        label="Website Url"
                        uniqueId="URL"
                        defaultValue={loggedInUser?.websiteUrl} />
                    <ButtonGroup disableElevation variant="outlined">
                        <ModalActionBtn btnText="SAVE" />
                        <ModalActionBtn btnText="CANCEL" />
                    </ButtonGroup>
                </ModalBox>
            </Box>
        </utilComp.PageContainer>
    );
}

export { ProfilePage };