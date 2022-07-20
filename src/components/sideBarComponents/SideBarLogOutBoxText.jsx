import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { boxText } from "../../utils/commonStyles";
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const SideBarLogOutBoxText = () => {
    
    const { loggedInUser } = useSelector((store) => store.user)
    
    return (
        <Box sx={{ textAlign: "left" }}>
            <Typography sx={boxText}>
                {loggedInUser.firstName} {loggedInUser.lastName}
                <DoneTwoToneIcon
                    sx={{
                        fontSize: "small",
                        color: "otherColors.lightGreen"
                    }} />
            </Typography>
            <Typography
                sx={{
                    fontSize: "small",
                    lineHeight: 0.8
                }}>
                @{loggedInUser.userName}
            </Typography>
        </Box>
    );
}

export { SideBarLogOutBoxText };