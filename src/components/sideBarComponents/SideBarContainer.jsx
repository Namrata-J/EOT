import { Box } from '@mui/material';
import { useHeader } from "../../contexts/header-context";
import { flexBetweenVariant2 } from "../../utils/commonStyles";

const SideBarContainer = ({ children }) => {

    const { hamburgerPopUpDisplay } = useHeader();

    return (
        <Box
            sx={{
                backgroundColor: 'primary.main',
                borderRadius: { sm: 2, md: 4, lg: 5 },
                width: { xs: '15rem', sm: '20rem', md: '15rem' },
                ...flexBetweenVariant2,
                position: { xs: 'absolute', sm: 'static' },
                zIndex: 1,
                height: { xs: "92vh", sm: "87vh", md: "82vh" },
                display: { xs: hamburgerPopUpDisplay, sm: 'flex' },
                boxShadow: { xs: 3, sm: 0 }
            }}>
            {children}
        </Box>
    );
}

export { SideBarContainer };