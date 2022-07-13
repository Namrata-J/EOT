import { Button } from '@mui/material';
import { containedBtn } from "../../utils/commonStyles";
import { useAuth } from '../../contexts';

const AuthSubmitButton = ({ text }) => {

    const { signUpHandler, logInHandler, guestLogInHandler } = useAuth();

    return (
        <Button
            variant="contained"
            sx={containedBtn}
            onClick={
                text === "SignUp" ? signUpHandler :
                    text === "LogIn" ? logInHandler :
                        guestLogInHandler}>
            {text}
        </Button>
    );
}

export { AuthSubmitButton };