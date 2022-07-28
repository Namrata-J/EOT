import { IconButton } from '@mui/material';
import { useHeader } from "../../contexts/header-context";

const HeaderIconBtn = ({ children }) => {

    const { handleHamburgerDisplay } = useHeader();

    return (
        <IconButton
            color="primary"
            size="medium"
            sx={{
                display: { xs: 'inline-block', sm: 'none' },
                height: '100%',
                "&:hover": {
                    color: 'otherColors.contradictory'
                }
            }}
            onClick={handleHamburgerDisplay}>
            {children}
        </IconButton>
    );
}

export { HeaderIconBtn };