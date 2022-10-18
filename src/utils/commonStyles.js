export const flexCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export const verticalFlex = {
    display: 'flex',
    flexDirection: 'column',
}

export const horizontalFlexCenter = {
    display: 'flex',
    justifyContent: 'center'
}

export const verticalFlexCenter = {
    display: 'flex',
    alignItems: 'center'
}

export const flexBetweenVariant1 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
}

export const flexBetweenVariant2 = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
}

export const fullScreen = {
    width: '100%',
    height: '100vh'
}

export const containerType1 = {
    width: '95%',
    height: '90vh',
}

export const darkOpacity = {
    bgcolor: 'secondary.main',
    opacity: '0.5',
}

export const headingVariantForLandingPage = {
    display: 'inline-block',
    fontWeight: 'bold',
    color: 'otherColors.white',
    fontSize: { xs: 'large' },
    marginBottom: '0.5rem'
}

export const landingPageBtn = {
    fontSize: { xs: 'x-small', sm: 'small' }
}

export const authCard = {
    backgroundColor: 'primary.light',
    p: 1.5,
    color: 'otherColors.lightestGray',
    width: '20rem'
}

export const authCardHeading = {
    fontWeight: 'bold',
    color: 'otherColors.lightestGray',
    textAlign: 'center'
}

export const authCardInput = {
    width: '100%',
    mt: 1,
    mb: 1,
    input: {
        backgroundColor: 'primary.main',
        color: 'otherColors.white',
    }
}

export const containedBtn = {
    width: '100%',
    mt: 1,
    backgroundColor: 'primary.dark'
}

export const authCardLink = {
    color: 'otherColors.lightGray',
    display: 'block',
    fontFamily: 'Gruppo',
    textAlign: 'center',
    mt: 1
}

export const logOutBtnContainer = {
    display: 'flex',
    justifyContent: 'space-around'
}

export const boxColor = {
    backgroundColor: 'primary.dark',
    color: 'otherColors.white',
}

export const textAlignment = {
    fontFamily: 'Gruppo',
    textAlign: "center"
}

export const boxSize = {
    maxWidth: "100%",
    height: { xs: "3.3rem", md: "3.5rem" },
}

export const boxSpacing = {
    borderRadius: { xs: 2, md: 4, lg: 8 },
    m: { xs: 0.5, md: 1 },
    p: { xs: 0.8, md: 1 },
    gap: { xs: 0.8, sm: 0.5 }
}

export const boxText = {
    color: 'otherColors.lightGray',
    fontWeight: 'bold'
}

export const card = {
    borderRadius: { xs: 5, sm: 2, md: 5 },
    border: 'none',
    backgroundColor: 'primary.main',
    color: 'otherColors.lightGray',
    minHeight: '10rem',
    overflow: 'visible'
}

export const cardAvatar = {
    width: { xs: 30, sm: 40 },
    height: { xs: 30, sm: 40 }
}

export const cardHeader = {
    p: { xs: 1, md: 2 },
    '& .MuiCardHeader-title': {
        fontWeight: 'bold',
        lineHeight: { xs: 1, sm: 1.3 },
        fontSize: { xs: '0.8rem', sm: '0.9rem' }
    },
    '& .MuiCardHeader-subheader': {
        color: 'otherColors.lightGray',
        fontSize: { xs: '0.7rem', sm: '0.8rem' }
    }
}

export const cardContent = {
    p: { xs: 1, sm: 2 },
    pt: { sm: 1 }
}

export const input = {
    border: 'transparent',
    backgroundColor: 'transparent',
    outline: 'transparent'
}

export const textArea = {
    color: '#9c9aa8',
    width: '100%',
    fontFamily: 'Gruppo',
}

export const cardActionIcon = {
    '& .MuiSvgIcon-root': {
        width: { xs: '0.8em', md: '1em' },
    }
}

export const actionBtn = {
    backgroundColor: "primary.dark",
    color: 'otherColors.lightGray',
    fontWeight: { sm: 'light', md: 'bold' },
    fontSize: { xs: '0.7rem', md: '0.8rem' },
}

export const scrollbar = {
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    "&::-webkit-scrollbar": {
        display: "none"
    },
}

export const sectionSpacing = {
    ml: { xs: '0.5rem', md: '1rem', lg: '2rem' },
    mr: { xs: '0.5rem', sm: '0rem', md: '1rem', lg: '2rem' },
    pt: { xs: '0.5rem', sm: 0 },
    pb: '0.5rem',
}

export const emojiPicker = {
    background: '#2d2640',
    borderRadius: '1.3rem',
    border: 'none',
    boxShadow: '0px 1px 5px black',
    display: 'flex',
    height: '17.2rem',
    width: '100%',
    position: 'absolute',
    zIndex: '1'
}

export const cardOptionIcon = {
    color: 'otherColors.white',
    position: 'relative',
    '& .MuiSvgIcon-root': {
        fontSize: { xs: '1rem', md: '1.2rem' }
    }
}

export const commentCardActionIcon = {
    '& .MuiSvgIcon-root': {
        width: {
            xs: '0.7em',
            md: '0.8em',
        }
    }
}

export const recommendationSection = {
    width: { md: '14rem', lg: '18rem' }
}

export const pageBoxStyling = {
    p: { sm: 1, md: 2, lg: 3 },
    display: "flex",
    width: "100%",
    height: { xs: "92vh", sm: "90vh", md: "88vh" }
}

export const chip = {
    cursor: 'pointer',
    p: '0.5rem 1rem',
    backgroundColor: 'primary.main',
    color: 'otherColors.lightestGray',
    borderRadius: 2,
    fontSize: { xs: '0.8rem', md: '0.9rem', lg: '1rem' },
    fontFamily: 'Gruppo',
}

export const profileCoverPicContainer = {
    width: '100%',
    minHeight: { xs: '6rem', sm: '8rem', lg: '10rem' },
    borderRadius: { xs: '0.5rem', md: '1rem', lg: '1.2rem' },
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative'
}

export const profileAvatar = {
    backgroundColor: 'primary.dark',
    width: { xs: 50, sm: 60, md: 70, lg: 90 },
    height: { xs: 50, sm: 60, md: 70, lg: 90 },
    position: 'absolute',
    bottom: { xs: '-1.5rem', sm: '-1.8rem', md: '-2rem', lg: '-2.5rem' },
    left: { xs: '0.6rem', md: '1rem', lg: '1.5rem' },
    border: '1px solid #2f293b'
}

export const profileInfoTextSize = {
    fontSize: { xs: '0.8rem', md: '0.9rem', lg: '1rem' }
}

export const profileInfoLink = {
    cursor: 'pointer',
    display: 'inline-block',
    color: 'otherColors.lightestPurple',
    fontFamily: 'Gruppo',
    mt: { xs: 0.8, md: 1 }
}

export const profilePageActionBtn = {
    fontSize: { xs: '0.7rem', lg: '0.85rem' },
    color: 'otherColors.lightestPurple',
    position: 'absolute',
    top: '0',
    right: '0'
}

export const ModalTextFieldStyle = {
    width: '100%',
    mt: 1,
    mb: 1,
    input: {
        borderRadius: 1,
        backgroundColor: 'otherColors.transparentPurple',
        color: 'otherColors.lightestGray'
    }
}

export const ModalActionBtnStyle = {
    border: '1px solid #56505a',
    color: 'otherColors.lightestGray',
    fontSize: { xs: '0.7rem', md: '0.8rem', lg: '1rem' },
    mt: 2,
}

export const modalImageInputIcon = {
    backgroundColor: '#1d162ee6',
    color: 'otherColors.lightestGray',
    position: 'absolute'
}

export const modalCoverPic = {
    minHeight: '6rem',
    borderRadius: 1,
    m: '0.5rem 0rem'
}