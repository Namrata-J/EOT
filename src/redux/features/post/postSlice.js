import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const encodedToken = localStorage.getItem("token");

const initialState = {
    loading: false,
    userPosts: [],
    posts: encodedToken ? [] : [],
    error: ""
};

const createPost = createAsyncThunk("posts/createPost", async ({ createdPost, encodedToken }) => {
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

const getAllPostsOfAUser = createAsyncThunk("posts/userPosts", async ({ username }) => {
    try {
        const response = await axios.get(`/api/posts/user/${username}`);
        return response.data.posts
    } catch (error) {
        return error
    }
});

const likePost = createAsyncThunk("posts/likePost", async ({ postId, encodedToken }) => {
    try {
        const response = await axios.post(`/api/posts/like/${postId}`,
            {},
            {
                headers: { authorization: encodedToken }
            });
        return response.data.posts
    } catch (error) {
        return error
    }
});

const dislikePost = createAsyncThunk("posts/dislikePost", async ({ postId, encodedToken }) => {
    try {
        const response = await axios.post(`/api/posts/dislike/${postId}`,
            {},
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

const editPost = createAsyncThunk("posts/editPost", async ({ postId, editedPostData, encodedToken }) => {
    try {
        const response = await axios.post(`/api/posts/edit/${postId}`,
            {
                postData: { ...editedPostData }
            },
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data.posts
    } catch (error) {
        return error
    }
});

const deletePost = createAsyncThunk("posts/deletePost", async ({ postId, encodedToken }) => {
    try {
        const response = await axios.delete(`/api/posts/${postId}`,
            {
                headers: { authorization: encodedToken }
            }
        );
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
        },
        [likePost.pending]: (state) => {
            state.loading = true;
        },
        [likePost.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [likePost.rejected]: (state) => {
            state.loading = false
            state.posts = []
            state.error = "ERROR_OCCURRED"
        },
        [dislikePost.pending]: (state) => {
            state.loading = true;
        },
        [dislikePost.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [dislikePost.rejected]: (state) => {
            state.loading = false
            state.posts = []
            state.error = "ERROR_OCCURRED"
        },
        [editPost.pending]: (state) => {
            state.loading = true;
        },
        [editPost.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [editPost.rejected]: (state) => {
            state.loading = false
            state.posts = []
            state.error = "ERROR_OCCURRED"
        },
        [deletePost.pending]: (state) => {
            state.loading = true;
        },
        [deletePost.fulfilled]: (state, action) => {
            state.loading = false
            state.posts = action.payload
        },
        [deletePost.rejected]: (state) => {
            state.loading = false
            state.posts = []
            state.error = "ERROR_OCCURRED"
        },
        [getAllPostsOfAUser.pending]: (state) => {
            state.loading = true;
        },
        [getAllPostsOfAUser.fulfilled]: (state, action) => {
            state.loading = false
            state.userPosts = action.payload
        },
        [getAllPostsOfAUser.rejected]: (state) => {
            state.loading = false
            state.userPosts = []
            state.error = "ERROR_OCCURRED"
        }
    }
});

export { createPost, getAllPosts, likePost, dislikePost, editPost, deletePost, getAllPostsOfAUser };
const { reducer } = postSlice;
export { reducer };