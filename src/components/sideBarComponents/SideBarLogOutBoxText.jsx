import DoneTwoToneIcon from '@mui/icons-material/DoneTwoTone';
import { boxText } from "../../utils/commonStyles";
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const SideBarLogOutBoxText = () => {

    const { loggedInUser } = useSelector((store) => store.user)

    return (
        <Box sx={{ textAlign: "left", pr: 2 }}>
            <Typography sx={{
                ...boxText,
                fontSize: {
                    xs: "0.7rem",
                    md: "0.8rem",
                    lg: "0.9rem"
                }
            }}>
                {loggedInUser.firstName} {loggedInUser.lastName}
                <DoneTwoToneIcon
                    sx={{
                        fontSize: {
                            xs: "x-small",
                            lg: "small"
                        },
                        color: "otherColors.lightGreen"
                    }} />
            </Typography>
            <Typography
                sx={{
                    fontSize: {
                        xs: "x-small",
                        lg: "small"
                    },
                    lineHeight: 0.8
                }}>
                @{loggedInUser.userName}
            </Typography>
        </Box>
    );
}

export { SideBarLogOutBoxText };