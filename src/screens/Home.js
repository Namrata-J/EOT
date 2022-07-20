import { utilComp } from "../components/";
import { Box } from '@mui/material';

const HomePage = () => {
    return (
        <utilComp.PageContainer>
            <utilComp.Header />
            <Box
                sx={{
                    p: 3,
                    display: "flex",
                    width: "100%",
                    height: "91vh"
                }}>
                <utilComp.SideBar />
                <utilComp.ContentSection />
            </Box>
        </utilComp.PageContainer>
    );
}

export { HomePage };