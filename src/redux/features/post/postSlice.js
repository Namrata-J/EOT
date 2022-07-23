import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const encodedToken = localStorage.getItem("token");

const initialState = {
    loading: false,
    posts: encodedToken? [] : [],
    error: ""
};

const createPost = createAsyncThunk("posts/createPost", async (createdPost) => {
    try {
        const response = await axios.post(`/api/posts`,
            {
                postData: { ...createdPost }
            },
            {
                headers: { authorization: encodedToken }
            });
        return response.data.posts
    } catch (error) {
        return error
    }
});

const getAllPosts = createAsyncThunk("posts/getAllPosts", async () => {
    try {
        const response = await axios.get(`/api/posts`);
        return response.data.posts
    } catch (error) {
        return error
    }
});

const postSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [createPost.pending]: (state) => {
            state.loading = true;
        },
        [createPost.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [createPost.rejected]: (state) => {
            state.loading = false
            state.posts = []
            state.error = "ERROR_OCCURRED"
        },
        [getAllPosts.pending]: (state) => {
            state.loading = true;
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state) => {
            state.loading = false
            state.posts = []
            state.error = "ERROR_OCCURRED"
        }
    }
});

export { createPost, getAllPosts };
const { reducer } = postSlice;
export { reducer };