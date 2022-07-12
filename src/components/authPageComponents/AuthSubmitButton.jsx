import { Button } from '@mui/material';
import { containedBtn } from "../../utils/commonStyles";
import { useAuth } from '../../contexts';

const AuthSubmitButton = ({ text }) => {

    const { signUpHandler, logInHandler } = useAuth();

    return (
        <Button
            variant="contained"
            sx={containedBtn}
            onClick={text === "SignUp" ? signUpHandler : logInHandler}>
            {text}
        </Button>
    );
}

export { AuthSubmitButton };