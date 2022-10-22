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
                boxShadow: '#091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px',
                width: { xs: '15rem', sm: '20rem', md: '15rem' },
                ...flexBetweenVariant2,
                position: { xs: 'absolute', sm: 'static' },
                zIndex: 2,
                height: { xs: "92vh", sm: "87vh", md: "82vh" },
                display: { xs: hamburgerPopUpDisplay, sm: 'flex' }
            }}>
            {children}
        </Box>
    );
}

export { SideBarContainer };