import { Button } from '@mui/material';
import { useModal } from "../../contexts/";
import { useDispatch, useSelector } from 'react-redux';
import { ModalActionBtnStyle } from "../../utils/commonStyles";
import { saveUserEditDetails } from "../../redux/features/user/userSlice";

const ModalActionBtn = ({ btnText }) => {

    const { encodedToken } = useSelector((store) => store.auth);
    const { handleCloseModal, editProfileState } = useModal();
    const dispatch = useDispatch();

    return (
        <Button
            onClick={
                () => btnText === "SAVE" ?
                    (
                        dispatch(saveUserEditDetails(
                            {
                                editedUserData: editProfileState,
                                encodedToken: encodedToken
                            }
                        )),
                        handleCloseModal()
                    ) :
                    handleCloseModal()
            }
            sx={ModalActionBtnStyle}
        >
            {btnText}
        </Button>
    );
}

export { ModalActionBtn };