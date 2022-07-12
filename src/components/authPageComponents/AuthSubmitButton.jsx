import { Button } from '@mui/material';
import { containedBtn } from "../../utils/commonStyles";

const AuthSubmitButton = ({ text }) => {
    return (
        <Button
            variant="contained"
            sx={containedBtn}>
            {text}
        </Button>
    );
}

export { AuthSubmitButton };