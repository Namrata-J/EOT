import { TextField } from '@mui/material';
import { authCardInput } from "../../utils/commonStyles";
import { useAuth } from "../../contexts/";

const AuthCardInputField = ({ inputProps }) => {

    const { handleChange, errorAttr } = useAuth();
    const { text, uniqueId, inputLabel, inputType } = inputProps;

    return (
        <TextField
            error={errorAttr(uniqueId, text)}
            onChange={(e) => handleChange(e, uniqueId)}
            sx={authCardInput}
            helperText={text}
            id={uniqueId}
            label={inputLabel}
            type={inputType}
            variant="outlined"
            size="small"
            required />
    );
}

export { AuthCardInputField };