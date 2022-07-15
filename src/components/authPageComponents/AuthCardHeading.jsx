import { Typography } from '@mui/material';
import { authCardHeading } from "../../utils/commonStyles";

const AuthCardHeading = ({ cardHeading }) => {
    return (
        <Typography
            variant='body1'
            sx={authCardHeading}>
            {cardHeading}
        </Typography>
    );
}

export { AuthCardHeading };