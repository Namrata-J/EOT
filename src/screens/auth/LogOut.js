import { Button, Typography } from '@mui/material';
import { authPageComp } from "../../components/";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { logOutBtnContainer, containedBtn } from "../../utils/commonStyles";

const LogOutPage = () => {

    const { setIsUserLoggedIn } = useAuth();
    const navigate = useNavigate();

    return (
        <authPageComp.AuthPageOuterContainer>
            <authPageComp.AuthCard sx={logOutBtnContainer}>
                <authPageComp.AuthCardHeading cardHeading="LogOut" />
                <Typography sx={{ textAlign: 'center' }}>
                    Are you sure you wanna quit!?
                </Typography>
                <Button
                    variant="contained"
                    sx={containedBtn}
                    onClick={() => { setIsUserLoggedIn(false); navigate("/") }}>LogOut
                </Button>
                <Button
                    variant="contained"
                    sx={containedBtn}
                    onClick={() => navigate("/home")}>Cancel
                </Button>
            </authPageComp.AuthCard>
        </authPageComp.AuthPageOuterContainer>
    );
}

export { LogOutPage };