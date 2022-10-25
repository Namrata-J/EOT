import { Box } from '@mui/material';
import { SafeFallback } from "../components/";

const NoRoutesMatchPage = () => {
    return (
        <Box sx={{ height: '100vh' }}>
            <SafeFallback text="Oops!!! This page doesn't exist." />
        </Box>
    );
}

export { NoRoutesMatchPage };