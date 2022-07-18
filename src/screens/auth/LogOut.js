import { logoutHandler } from "../../redux/features/authentication/authSlice";
import { logOutBtnContainer, containedBtn } from "../../utils/commonStyles";
import { Button, Typography } from '@mui/material';
import { authPageComp } from "../../components/";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

const LogOutPage = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                    onClick={() => { dispatch(logoutHandler()); navigate("/") }}>LogOut
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