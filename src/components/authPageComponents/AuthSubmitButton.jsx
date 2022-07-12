import { Button } from '@mui/material';
import { containedBtn } from "../../utils/commonStyles";
import { useAuth } from '../../contexts';

const AuthSubmitButton = ({ text }) => {

    const { signUpHandler } = useAuth();

    return (
        <Button
            variant="contained"
            sx={containedBtn}
            onClick={signUpHandler}>
            {text}
        </Button>
    );
}

export { AuthSubmitButton };