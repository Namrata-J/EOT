import { Button, ButtonGroup } from '@mui/material';
import { landingPageBtn } from '../../utils/commonStyles';

const LinksContainer = () => {
    return (
        <ButtonGroup variant="contained" sx={{ mt: 2 }}>
            <Button sx={ landingPageBtn }>Join Now</Button>
            <Button sx={ landingPageBtn }>Already have an account</Button>
        </ButtonGroup>
    );
}

export { LinksContainer };