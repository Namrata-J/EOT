import { useModal } from "../../contexts/";
import { TextareaAutosize } from '@mui/material';
import { EDIT_BIO } from "../../constants/modalConstants";
import { input, textArea } from "../../utils/commonStyles";

const ModalTextArea = ({ defaultValue }) => {

    const { dispatchOfEditProfile } = useModal();

    return (
        <TextareaAutosize
            onChange={
                (e) => dispatchOfEditProfile(
                    {
                        type: EDIT_BIO,
                        payload: e.target.value
                    })
            }
            minRows={2}
            defaultValue={defaultValue}
            placeholder="Bio"
            style={{
                ...input,
                ...textArea,
                backgroundColor: '#1c182aa1',
                fontSize: '1rem',
                color: '#d5d3db',
                padding: '0.8rem',
                width: '100%',
                margin: '0.5rem 0rem',
                borderRadius: '0.2rem',
            }} />
    );
}

export { ModalTextArea };