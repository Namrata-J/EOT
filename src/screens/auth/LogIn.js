import { Box, Link } from '@mui/material';
import { authPageComp } from "../../components/";
import { authCardLink } from "../../utils/commonStyles";

const LogInPage = () => {
    return (
        <authPageComp.AuthPageOuterContainer>
            <authPageComp.AuthCard>
                <authPageComp.AuthCardHeading cardHeading="LogIn" />
                <Box component="form" sx={{ width: '100%', p: 1 }}>
                    <authPageComp.AuthCardInputField
                        inputProps={{
                            text: "Please enter your email",
                            uniqueId: "LOGIN_EMAIL",
                            inputLabel: "Email",
                            inputType: "email"
                        }} />
                    <authPageComp.AuthCardInputField
                        inputProps={{
                            text: "Please enter your password",
                            uniqueId: "LOGIN_PWD",
                            inputLabel: "Password",
                            inputType: "password"
                        }} />
                    <authPageComp.AuthSubmitButton text="LogIn" />
                    <authPageComp.AuthSubmitButton text="Guest Login" />
                    <Link
                        href="/signup"
                        sx={authCardLink}>
                        Create new account:-)
                    </Link>
                </Box>
            </authPageComp.AuthCard>
        </authPageComp.AuthPageOuterContainer>
    );
}

export { LogInPage };