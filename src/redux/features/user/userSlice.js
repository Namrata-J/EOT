import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    users: [],
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

const saveUserEditDetails = createAsyncThunk("user/editUserDetail", async (editedUserData) => {
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

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {
        [getAllUsers.pending]: (state) => {
            state.loading = true
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.loading = false
            state.users = action.payload
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
    }
});

export { getAllUsers, getSelectedUser, saveUserEditDetails };
export const { reducer } = userSlice;