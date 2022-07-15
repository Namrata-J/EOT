import { Button, ButtonGroup } from '@mui/material';
import { landingPageBtn } from '../../utils/commonStyles';

const LinksContainer = () => {
    return (
        <ButtonGroup variant="contained" sx={{ mt: 2 }}>
            <Button href="/signup" sx={ landingPageBtn }>Join Now</Button>
            <Button href="/login" sx={ landingPageBtn }>Already have an account</Button>
        </ButtonGroup>
    );
}

export { LinksContainer };