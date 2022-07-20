import { Box } from '@mui/material';
import {
    boxColor,
    textAlignment,
    boxSize,
    boxSpacing,
    verticalFlexCenter
} from "../../utils/commonStyles";

const SideBarLogOutBoxContainer = ({ children }) => {
    return (
        <Box
            sx={{
                ...boxColor,
                ...textAlignment,
                ...boxSize,
                ...boxSpacing,
                ...verticalFlexCenter,
                position: "relative"
            }}>
            {children}
        </Box>
    );
}

export { SideBarLogOutBoxContainer };