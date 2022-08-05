import { ModalBox, ModalTextField, ModalTextArea, ModalActionBtn, ModalImageInput } from "../components/modalChildComponents/";
import { INITIAL_EDIT_STATE } from "../constants/modalConstants";
import { pageBoxStyling } from "../utils/commonStyles";
import { Box, ButtonGroup } from '@mui/material';
import { useParams } from "react-router-dom";
import { utilComp } from "../components/";
import { useSelector } from "react-redux";
import { useModal } from "../contexts/";
import { useEffect } from "react";

const ProfilePage = () => {

    const { loggedInUser } = useSelector((store) => store.user);
    const { userId } = useSelector((store) => store.auth);
    const { dispatchOfEditProfile } = useModal();
    const { profileId } = useParams();

    useEffect(() => {
        if (profileId === userId) {
            dispatchOfEditProfile({
                type: INITIAL_EDIT_STATE,
                payload: loggedInUser
            })
        }
        // eslint-disable-next-line
    }, [loggedInUser]);

    return (
        <utilComp.PageContainer>
            <utilComp.Header />
            <Box sx={pageBoxStyling}>
                <utilComp.SideBar />
                <utilComp.ProfileSection profileId={profileId} />
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