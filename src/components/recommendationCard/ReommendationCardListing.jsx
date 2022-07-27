import { Box } from '@mui/material';
import { RecommendationCard } from "./";
import { useSelector } from 'react-redux';
import { scrollbar } from "../../utils/commonStyles";

const RecommendationCardListing = () => {

    const { users, loggedInUser } = useSelector((store) => store.user);

    return (
        <Box
            sx={{
                ...scrollbar,
                display: { xs: 'flex', md: 'block' },
                gap: 1,
                height: { xs: '100%', md: '73vh' },
            }}>
            {
                users?.filter(
                    (user) => user.userName !== loggedInUser.userName &&
                        user.followers.length === 0
                ).map((user, index) =>
                    <RecommendationCard key={index} user={user} />
                )
            }
        </Box>
    );
}

export { RecommendationCardListing };