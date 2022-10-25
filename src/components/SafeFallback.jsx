import { flexCenter, defaultActionBtn } from "../utils/commonStyles";
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const SafeFallback = ({ text }) => {

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
                {text}
            </Typography>
            <Button
                sx={{ ...defaultActionBtn, mt: 2 }}
                onClick={() => navigate('/home')}>
                Go Back
            </Button>
        </Box>
    );
}

export { SafeFallback };