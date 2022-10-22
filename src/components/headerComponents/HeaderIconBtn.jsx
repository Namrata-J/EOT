import { IconButton } from '@mui/material';
import { headerIcon } from "../../utils/commonStyles";
import { useHeader } from "../../contexts/header-context";

const HeaderIconBtn = ({ children }) => {

    const { handleHamburgerDisplay } = useHeader();

    return (
        <IconButton
            size="medium"
            sx={{
                ...headerIcon,
                display: { xs: 'inline-block', sm: 'none' },
                height: '100%',
            }}
            onClick={handleHamburgerDisplay}>
            {children}
        </IconButton>
    );
}

export { HeaderIconBtn };