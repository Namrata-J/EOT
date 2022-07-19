import { useEffect } from "react";
import { Button } from '@mui/material';
import { useAuth } from '../../contexts';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from "react-router-dom";
import { containedBtn } from "../../utils/commonStyles";
import { signUpHandler, logInHandler, guestLogInHandler } from "../../redux/features/authentication/authSlice";

const AuthSubmitButton = ({ text }) => {

    const { isUserLoggedIn } = useSelector((store) => store.auth);
    const { userSignUpForm, userLogInForm } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (isUserLoggedIn) {
            location?.state?.from?.pathname ?
                navigate(location?.state?.from?.pathname, { replace: true }) :
                navigate("/home", { replace: true })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUserLoggedIn]);

    return (
        <Button
            variant="contained"
            sx={containedBtn}
            onClick={() =>
                text === "SignUp" ?
                    dispatch(
                        signUpHandler({
                            userEmail: userSignUpForm.userEmail,
                            userPwd: userSignUpForm.userPwd
                        })) :
                    text === "LogIn" ?
                        dispatch(
                            logInHandler({
                                userEmail: userLogInForm.userEmail,
                                userPwd: userLogInForm.userPwd
                            })) :
                        dispatch(guestLogInHandler())}>
            {text}
        </Button>
    );
}

export { AuthSubmitButton };