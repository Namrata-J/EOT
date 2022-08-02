import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
    bookmarks: [],
    loggedInUser: {},
    loading: false,
    error: ""
};

const encodedToken = localStorage.getItem("token");

const getAllUsers = createAsyncThunk("user/users", async () => {
    try {
        const response = await axios.get(`/api/users`);
        return response.data.users
    } catch (error) {
        return error
    }
});

const getSelectedUser = createAsyncThunk("user/user", async (userId) => {
    try {
        const response = await axios.get(`/api/users/${userId}`)
        return response.data.user
    } catch (error) {
        return error
    }
});

const saveUserEditDetails = createAsyncThunk("user/editUserDetail", async ({ editedUserData }) => {
    try {
        const response = await axios.post(`/api/users/edit`,
            {
                userData: { ...editedUserData }
            },
            {
                headers: { authorization: encodedToken }
            });
        return response.data.user
    } catch (error) {
        return error
    }
});

const getAllUserBookmarks = createAsyncThunk("user/userBookmarks", async () => {
    try {
        const response = await axios.get(`/api/users/bookmark/`,
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data.bookmarks
    } catch (error) {
        return error
    }
});

const addToUserBookmarks = createAsyncThunk("user/addToBookmark", async ({ postId }) => {
    try {
        const response = await axios.post(`/api/users/bookmark/${postId}`,
            {},
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data.bookmarks
    } catch (error) {
        return error
    }
});

const removeFromUserBookmarks = createAsyncThunk("user/removeFromBookmark", async ({ postId }) => {
    try {
        const response = await axios.post(`/api/users/remove-bookmark/${postId}`,
            {},
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data.bookmarks
    } catch (error) {
        return error
    }
});

const followTheUser = createAsyncThunk("user/followUser", async ({ followUsername }) => {
    try {
        const response = await axios.post(`/api/users/follow/${followUsername}`,
            {},
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data
    } catch (error) {
        return error
    }
});

const unfollowTheUser = createAsyncThunk("user/unfollowUser", async ({ followUsername }) => {
    try {
        const response = await axios.post(`/api/users/unfollow/${followUsername}`,
            {},
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data
    } catch (error) {
        return error
    }
});

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.loading = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload.length? action.payload : []
        },
        [getAllUsers.rejected]: (state) => {
            state.loading = false
            state.users = []
            state.error = "ERROR_OCCURRED"
        },
        [getSelectedUser.pending]: (state) => {
            state.loading = true
        },
        [getSelectedUser.fulfilled]: (state, action) => {
            state.loading = false
            state.loggedInUser = action.payload
        },
        [getSelectedUser.rejected]: (state) => {
            state.loading = false
            state.loggedInUser = {}
            state.error = "ERROR_OCCURRED"
        },
        [saveUserEditDetails.pending]: (state) => {
            state.loading = true
        },
        [saveUserEditDetails.fulfilled]: (state, action) => {
            state.loading = false
            state.loggedInUser = action.payload
        },
        [saveUserEditDetails.rejected]: (state) => {
            state.loading = false
            state.loggedInUser = {}
            state.error = "ERROR_OCCURRED"
        },
        [getAllUserBookmarks.pending]: (state) => {
            state.loading = true
        },
        [getAllUserBookmarks.fulfilled]: (state, action) => {
            state.loading = false
            state.bookmarks = action.payload.length? action.payload : []
        },
        [getAllUserBookmarks.rejected]: (state) => {
            state.loading = false
            state.bookmarks = []
            state.error = "ERROR_OCCURRED"
        },
        [addToUserBookmarks.pending]: (state) => {
            state.loading = true
        },
        [addToUserBookmarks.fulfilled]: (state, action) => {
            state.loading = false
            state.bookmarks = action.payload
        },
        [addToUserBookmarks.rejected]: (state) => {
            state.loading = false
            state.bookmarks = []
            state.error = "ERROR_OCCURRED"
        },
        [removeFromUserBookmarks.pending]: (state) => {
            state.loading = true
        },
        [removeFromUserBookmarks.fulfilled]: (state, action) => {
            state.loading = false
            state.bookmarks = action.payload
        },
        [removeFromUserBookmarks.rejected]: (state) => {
            state.loading = false
            state.bookmarks = []
            state.error = "ERROR_OCCURRED"
        },
        [followTheUser.pending]: (state) => {
            state.loading = true
        },
        [followTheUser.fulfilled]: (state, action) => {
            state.loading = false
            state.loggedInUser = action.payload.user
        },
        [followTheUser.rejected]: (state) => {
            state.loading = false
            state.loggedInUser = {}
            state.error = "ERROR_OCCURRED"
        },
        [unfollowTheUser.pending]: (state) => {
            state.loading = true
        },
        [unfollowTheUser.fulfilled]: (state, action) => {
            state.loading = false
            state.loggedInUser = action.payload.user
        },
        [unfollowTheUser.rejected]: (state) => {
            state.loading = false
            state.loggedInUser = {}
            state.error = "ERROR_OCCURRED"
        },
    }
});

export {
    getAllUsers,
    getSelectedUser,
    saveUserEditDetails,
    getAllUserBookmarks,
    addToUserBookmarks,
    removeFromUserBookmarks,
    followTheUser,
    unfollowTheUser
};
export const { reducer } = userSlice;