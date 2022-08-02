import { useModal } from "../../contexts/";
import { Box, IconButton, Avatar } from "@mui/material";
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import { EDIT_COVERPIC, EDIT_PROFILEPIC } from "../../constants/modalConstants";
import { profileCoverPicContainer, modalImageInputIcon, flexCenter, modalCoverPic } from "../../utils/commonStyles";

const ModalImageInput = ({ coverPic, profilePic }) => {

    const { dispatchOfEditProfile, editProfileState } = useModal();

    const handleImageInput = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();

            // will start when file completely read through any of the reading methods
            reader.addEventListener("load", () => {
                const uploaded_image = reader.result
                if (e.target.name === "COVER") {
                    dispatchOfEditProfile({
                        type: EDIT_COVERPIC,
                        payload: uploaded_image
                    })
                } else {
                    dispatchOfEditProfile({
                        type: EDIT_PROFILEPIC,
                        payload: uploaded_image
                    })
                }
            })

            reader.readAsDataURL(selectedFile);
        }
    }

    return (
        <Box>
            <Box
                sx={!editProfileState.coverPic ?
                    {
                        ...profileCoverPicContainer,
                        backgroundImage: `url(${coverPic})`,
                        ...modalCoverPic
                    } :
                    {
                        ...profileCoverPicContainer,
                        backgroundImage: `url(${editProfileState.coverPic})`,
                        ...modalCoverPic
                    }
                }>
                <IconButton
                    component="label"
                    sx={{
                        ...modalImageInputIcon,
                        left: '43.5%',
                        bottom: '35%'
                    }}>
                    <input
                        hidden
                        name="COVER"
                        accept="image/*"
                        type="file"
                        onChange={(e) => handleImageInput(e)} />
                    <AddAPhotoTwoToneIcon
                        sx={{
                            fontSize: '1.2rem'
                        }} />
                </IconButton>
            </Box>
            <Box
                sx={{
                    ...flexCenter,
                    position: 'relative'
                }}>
                <Avatar
                    alt="user"
                    src={
                        !editProfileState.profilePic ?
                            profilePic :
                            editProfileState.profilePic
                    }
                    sx={{
                        backgroundColor: 'otherColors.transparentPurple',
                        border: '2px solid #2f293b',
                        width: 80,
                        height: 80,
                        m: '0.5rem 0rem'
                    }} />
                <IconButton
                    component="label"
                    sx={{
                        ...modalImageInputIcon,
                        left: 'center',
                        bottom: 'center'
                    }}>
                    <input
                        hidden
                        name="PROFILE"
                        accept="image/*"
                        type="file"
                        onChange={(e) => handleImageInput(e)} />
                    <AddAPhotoTwoToneIcon
                        sx={{
                            fontSize: '1rem'
                        }} />
                </IconButton>
            </Box>
        </Box>
    );
}

export { ModalImageInput };