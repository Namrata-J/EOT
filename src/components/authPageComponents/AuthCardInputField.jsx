import { TextField } from '@mui/material';
import { authCardInput } from "../../utils/commonStyles";
import { useAuth } from "../../contexts/";

const AuthCardInputField = ({ inputProps }) => {

    const { handleChange } = useAuth();

    return (
        <TextField
            onChange={(e) => handleChange(e, inputProps.uniqueId)}
            sx={authCardInput}
            helperText={inputProps.text}
            id={inputProps.uniqueId}
            label={inputProps.inputLabel}
            type={inputProps.inputType}
            variant="outlined"
            size="small"
            required />
    );
}

export { AuthCardInputField };