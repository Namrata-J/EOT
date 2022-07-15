import { Paper } from '@mui/material';
import { authCard } from "../../utils/commonStyles";

const AuthCard = ({ children }) => {
    return (
        <Paper
            variant="outlined"
            sx={authCard}>
            {children}
        </Paper>
    );
}

export { AuthCard };