import { Box, Typography } from '@mui/material';
import { OuterContainer, InnerContainer, LinksContainer } from "../components/";
import { headingVariantForLandingPage, flexCenter } from "../utils/commonStyles";
import { appIntroLines } from '../constants/landingPageText';
import logo from "../assets/Logo.png";

const LandingPage = () => {
    return (
        <OuterContainer>
            <InnerContainer>
                <Box
                    component="img"
                    src={logo}
                    sx={{
                        width: { xs: 140, sm: 170, md: 250 },
                    }} />
                <div sx={flexCenter}>
                    {
                        appIntroLines.map((eachLine) =>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: 'xx-small', md: 'small' }
                                }}>
                                <Box
                                    sx={headingVariantForLandingPage}>
                                    {eachLine.boldText}
                                </Box> {eachLine.normalText}
                            </Typography>)
                    }
                    <LinksContainer />
                </div>
            </InnerContainer>
        </OuterContainer>
    );
}

export { LandingPage };