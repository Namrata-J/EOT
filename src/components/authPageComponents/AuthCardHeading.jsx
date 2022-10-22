import { Typography } from '@mui/material';
import { authCardHeading } from "../../utils/commonStyles";

const AuthCardHeading = ({ cardHeading }) => {
    return (
        <Typography
            variant='h6'
            sx={authCardHeading}>
            {cardHeading}
        </Typography>
    );
}

export { AuthCardHeading };