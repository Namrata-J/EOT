import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, TextField } from '@mui/material';
import { recommendationSection } from "../../utils/commonStyles";
import { getAllUsers } from "../../redux/features/user/userSlice";
import { RecommendationCardListing } from "../recommendationCard/";

const FollowRecommendationSection = () => {

    const { loggedInUser } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [loggedInUser, dispatch]);

    return (
        <Box
            sx={{
                ...recommendationSection,
                display: { xs: 'none', md: 'block' },
            }}>
            <TextField
                id="search-user"
                label="Search"
                variant="filled"
                size="small"
                sx={{
                    width: '100%',
                    backgroundColor: 'primary.main',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    input: {
                        color: 'otherColors.lightestGray',
                    }
                }}
            />
            <RecommendationCardListing />
        </Box>
    );
}

export { FollowRecommendationSection };