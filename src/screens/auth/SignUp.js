import { Box } from '@mui/material';
import { authPageComp } from "../../components/";

const SignUpPage = () => {
    return (
        <authPageComp.AuthPageOuterContainer>
            <authPageComp.AuthCard>
                <authPageComp.AuthCardHeading cardHeading="SignUp" />
                <Box component="form" sx={{ width: '100%', p: 1 }}>
                    <authPageComp.AuthCardInputField
                        inputProps={{
                            text: "Please enter your email",
                            uniqueId: "SIGNUP_EMAIL",
                            inputLabel: "Email",
                            inputType: "email"
                        }} />
                    <authPageComp.AuthCardInputField
                        inputProps={{
                            text: "Please enter your password",
                            uniqueId: "SIGNUP_PWD",
                            inputLabel: "Password",
                            inputType: "password"
                        }} />
                </Box>
            </authPageComp.AuthCard>
        </authPageComp.AuthPageOuterContainer>
    );
}

export { SignUpPage };