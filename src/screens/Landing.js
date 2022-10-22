import { Box, Typography } from '@mui/material';
import { landingPageComp } from "../components/";
import { headingVariantForLandingPage, flexCenter } from "../utils/commonStyles";
import { appIntroLines } from '../constants/landingPageText';
import logo from "../assets/Logo.png";

const LandingPage = () => {
    return (
        <landingPageComp.OuterContainer>
            <landingPageComp.InnerContainer>
                <Box
                    component="img"
                    src={logo}
                    sx={{
                        width: { xs: 250, md: 300 },
                    }} />
                <div sx={flexCenter}>
                    {
                        appIntroLines.map((eachLine, index) =>
                            <Typography
                                key={index}
                                variant="body1"
                                sx={{
                                    color: 'otherColors.gray',
                                    fontSize: { xs: 'small' },
                                    fontWeight: 'bold',
                                    fontFamily: 'Gruppo'
                                }}>
                                <Box
                                    sx={headingVariantForLandingPage}>
                                    {eachLine.boldText}
                                </Box> {eachLine.normalText}
                            </Typography>)
                    }
                    <landingPageComp.LinksContainer />
                </div>
            </landingPageComp.InnerContainer>
        </landingPageComp.OuterContainer>
    );
}

export { LandingPage };