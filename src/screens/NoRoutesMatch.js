import { flexCenter, defaultActionBtn } from "../utils/commonStyles";
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const NoRoutesMatchPage = () => {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                ...flexCenter,
                flexDirection: 'Column',
                backgroundColor: 'primary.main',
                height: '100vh'
            }}>
            <Typography sx={{
                color: 'otherColors.gray',
                fontFamily: 'Gruppo',
                fontWeight: 'bold',
                fontSize: '1.1rem'
            }}>
                Oops!!! This page doesn't exist.
            </Typography>
            <Button
                sx={{ ...defaultActionBtn, mt: 2 }}
                onClick={() => navigate('/home')}>
                Go Back
            </Button>
        </Box>
    );
}

export { NoRoutesMatchPage };