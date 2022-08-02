import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useModal } from "../../contexts/";
import { ModalActionBtnStyle } from "../../utils/commonStyles";
import { saveUserEditDetails } from "../../redux/features/user/userSlice";

const ModalActionBtn = ({ btnText }) => {

    const { handleCloseModal, editProfileState } = useModal();
    const dispatch = useDispatch();

    return (
        <Button
            onClick={
                () => btnText === "SAVE" ?
                    (
                        dispatch(saveUserEditDetails({ editedUserData: editProfileState })),
                        handleCloseModal()
                    ) :
                    handleCloseModal()
            }
            sx={
                btnText === "SAVE" ?
                    {
                        ...ModalActionBtnStyle,
                        '&:hover': {
                            backgroundColor: 'primary.light'
                        }
                    } :
                    btnText === "CANCEL" ?
                        {
                            ...ModalActionBtnStyle,
                            '&:hover': {
                                fontSize: 'bold',
                                color: 'otherColors.contradictory'
                            }
                        } :
                        ModalActionBtnStyle
            }
        >
            {btnText}
        </Button>
    );
}

export { ModalActionBtn };