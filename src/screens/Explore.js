import { pageBoxStyling, sectionSpacing, scrollbar, chip } from "../utils/commonStyles";
import { PostsListing } from "../components/postsSectionComponents/PostsListing";
import { utilComp } from "../components/";
import { useFilter } from "../contexts/";
import { Box } from '@mui/material';

const ExplorePage = () => {

    const { allFiltersArr, dispatchOfFilter, stateOfFilter } = useFilter();

    return (
        <utilComp.PageContainer>
            <utilComp.Header />
            <Box sx={pageBoxStyling}>
                <utilComp.SideBar />
                <Box
                    sx={{
                        ...scrollbar,
                        width: '45rem',
                        ...sectionSpacing,
                        position: 'relative'
                    }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 2,
                            width: '100%',
                            height: '3rem',
                            overflowX: 'scroll',
                            scrollbarWidth: 'none',
                            "&::-webkit-scrollbar": {
                                display: "none"
                            }
                        }}>
                        <Box
                            sx={{
                                ...chip,
                                '&:hover': {
                                    backgroundColor: 'otherColors.transparentPurple',
                                    border: '1px solid #9c9aa8'
                                }
                            }}
                            onClick={() => dispatchOfFilter(
                                {
                                    type: "CLEAR_ALL_FILTERS"
                                }
                            )}>
                            ALL
                        </Box>
                        {
                            allFiltersArr?.map((filter, index) =>
                                <Box
                                    key={index}
                                    sx={
                                        stateOfFilter.filteredTags.includes(filter) ?
                                            {
                                                ...chip,
                                                backgroundColor: 'otherColors.transparentPurple',
                                                border: '1px solid #9c9aa8'
                                            } :
                                            chip
                                    }
                                    onClick={() => dispatchOfFilter(
                                        {
                                            type: "FILTER_TAGS",
                                            payload: filter
                                        }
                                    )}
                                >
                                    {filter}
                                </Box>
                            )
                        }
                    </Box>
                    <PostsListing />
                </Box>
                <utilComp.FollowRecommendationSection />
            </Box>
        </utilComp.PageContainer>
    );
}

export { ExplorePage };