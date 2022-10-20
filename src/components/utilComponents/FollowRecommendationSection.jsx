import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useCallback } from 'react';
import { recommendationSection } from "../../utils/commonStyles";
import { getAllUsers } from "../../redux/features/user/userSlice";
import { RecommendationCardListing } from "../recommendationCard/";
import { Box, TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

const FollowRecommendationSection = () => {

    const { users, loggedInUser } = useSelector((store) => store.user);
    const [searchedUsers, setSearchedUsers] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getSearchingResults = (e) => {
        setSearchedUsers((searchedUsers) => users.filter((user) => user.userName.toLowerCase().includes(e.target.value.toLowerCase()) && e.target.value !== ""))
    }

    const debouncingSearch = (func, delay) => {
        let timer;
        return function () {
            const context = this,
                args = arguments;

            clearTimeout(timer);
            timer = setTimeout(() =>
                func.apply(context, args)
                , delay);
        }
    }

    // eslint-disable-next-line
    const efficientSearch = useCallback(debouncingSearch((event) => getSearchingResults(event), 500), []);

    const handleSearchEffectively = (e) => {
        efficientSearch(e);
    }

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
                onChange={(e) => handleSearchEffectively(e)}
                sx={{
                    width: '100%',
                    backgroundColor: 'otherColors.mediumPurple',
                    borderTopLeftRadius: 18,
                    borderTopRightRadius: 18,
                    input: {
                        color: 'otherColors.lightestGray',
                    }
                }}
            />
            {
                searchedUsers.length > 0 && <List
                    sx={{
                        bgcolor: '#271e36',
                        boxShadow: '0px 0px 2px 0px black',
                        borderTop: '1px solid #edebeb',
                        borderBottomLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        position: 'absolute',
                        width: { md: '14rem', lg: '18rem' },
                        zIndex: '2'
                    }} >
                    {
                        searchedUsers.map(
                            (user, index) => <ListItem
                                key={index}
                                onClick={() => navigate(`/profile/${user._id}`)}
                                sx={{
                                    cursor: 'pointer',
                                    '&:hover': {
                                        bgcolor: 'otherColors.mediumPurple'
                                    }
                                }}>
                                <ListItemAvatar>
                                    <Avatar alt="user" src={user.profilePic} />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${user.firstName} ${user.lastName}`}
                                    secondary={`@${user.userName}`}
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'otherColors.white'
                                        },
                                        '& .MuiListItemText-secondary': {
                                            color: 'otherColors.lightGray'
                                        }
                                    }} />
                            </ListItem>
                        )
                    }
                </List>
            }
            <RecommendationCardListing />
        </Box >
    );
}

export { FollowRecommendationSection };