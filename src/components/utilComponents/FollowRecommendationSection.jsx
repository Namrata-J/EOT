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
                    input: {
                        backgroundColor: 'primary.main',
                        boxShadow: '#091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px',
                        borderTopLeftRadius: 2,
                        borderTopRightRadius: 2,
                        color: 'otherColors.gray',
                        fontFamily: 'Gruppo',
                        fontWeight: 'bold'
                    }
                }}
            />
            {
                searchedUsers.length > 0 && <List
                    sx={{
                        bgcolor: 'primary.light',
                        boxShadow: '#091e4240 0px 1px 1px, #091e4221 0px 0px 1px 1px',
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
                                        bgcolor: 'primary.main',
                                        borderRadius: '0.5rem'
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
                                            color: 'secondary.main',
                                            fontFamily: 'Gruppo',
                                            fontWeight: 'bold'
                                        },
                                        '& .MuiListItemText-secondary': {
                                            color: 'otherColors.gray',
                                            fontFamily: 'Gruppo',
                                            fontWeight: 'bold'
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