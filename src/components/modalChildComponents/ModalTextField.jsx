import { TextField } from '@mui/material';
import { useModal } from "../../contexts/";
import { ModalTextFieldStyle } from "../../utils/commonStyles";
import { EDIT_FIRSTNAME, EDIT_LASTNAME, EDIT_URL } from "../../constants/modalConstants";

const ModalTextField = ({ type, label, uniqueId, defaultValue }) => {

    const { dispatchOfEditProfile } = useModal();

    return (
        <TextField
            onChange={
                (e) => uniqueId === "FIRSTNAME" ?
                    dispatchOfEditProfile(
                        {
                            type: EDIT_FIRSTNAME,
                            payload: e.target.value
                        }) :
                    uniqueId === "LASTNAME" ?
                        dispatchOfEditProfile(
                            {
                                type: EDIT_LASTNAME,
                                payload: e.target.value
                            }) :
                        dispatchOfEditProfile(
                            {
                                type: EDIT_URL,
                                payload: e.target.value
                            })
            }
            size="small"
            variant="filled"
            type={type}
            label={label}
            id={uniqueId}
            defaultValue={defaultValue}
            sx={ModalTextFieldStyle} />
    );
}

export { ModalTextField };