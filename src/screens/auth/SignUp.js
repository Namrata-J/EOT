import { Box, Link } from '@mui/material';
import { authPageComp } from "../../components/";
import { authCardLink } from "../../utils/commonStyles";
import { useAuth } from "../../contexts/auth-context";

const SignUpPage = () => {

    const { signUpFormHelperText } = useAuth();

    return (
        <authPageComp.AuthPageOuterContainer>
            <authPageComp.AuthCard>
                <authPageComp.AuthCardHeading cardHeading="SignUp" />
                <Box component="form" sx={{ width: '100%', p: 1 }}>
                    <authPageComp.AuthCardInputField
                        inputProps={{
                            text: signUpFormHelperText.email,
                            uniqueId: "SIGNUP_EMAIL",
                            inputLabel: "Email",
                            inputType: "email"
                        }} />
                    <authPageComp.AuthCardInputField
                        inputProps={{
                            text: signUpFormHelperText.pwd,
                            uniqueId: "SIGNUP_PWD",
                            inputLabel: "Password",
                            inputType: "password"
                        }} />
                    <authPageComp.AuthSubmitButton
                        text="SignUp" />
                    <Link
                        href="/login"
                        sx={authCardLink}>
                        Already have an account:-)
                    </Link>
                </Box>
            </authPageComp.AuthCard>
        </authPageComp.AuthPageOuterContainer>
    );
}

export { SignUpPage };