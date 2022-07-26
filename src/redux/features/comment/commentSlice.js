import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const encodedToken = localStorage.getItem("token");

const initialState = {
    loading: false,
    comments: [],
    error: ""
};

const addComment = createAsyncThunk("comments/addComment", async ({ postId, commentData }) => {
    try {
        const response = await axios.post(`/api/comments/add/${postId}`,
            {
                commentData: { ...commentData }
            },
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data.comments
    } catch (error) {
        return error
    }
});

const getCommentsOfAPost = createAsyncThunk("comments/commentsOfAPost", async (postId) => {
    try {
        const response = await axios.get(`/api/comments/${postId}`);
        return response.data.comments
    } catch (error) {
        return error
    }
});

const upVoteComment = createAsyncThunk("comments/upVoteComment", async ({ postId, commentId }) => {
    try {
        const response = await axios.post(`/api/comments/upvote/${postId}/${commentId}`,
            {},
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data.comments
    } catch (error) {
        return error
    }
});

const downVoteComment = createAsyncThunk("comments/downVoteComment", async ({ postId, commentId }) => {
    try {
        const response = await axios.post(`/api/comments/downvote/${postId}/${commentId}`,
            {},
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data.comments
    } catch (error) {
        return error
    }
});

const deleteComment = createAsyncThunk("comments/deleteComment", async ({ postId, commentId }) => {
    try {
        const response = await axios.delete(`/api/comments/delete/${postId}/${commentId}`,
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data.comments
    } catch (error) {
        return error
    }
});

const editComment = createAsyncThunk("comments/editComment", async ({ postId, commentId, editedData }) => {
    try {
        const response = await axios.post(`/api/comments/edit/${postId}/${commentId}`,
            {
                commentData: { ...editedData }
            },
            {
                headers: { authorization: encodedToken }
            }
        );
        return response.data.comments
    } catch (error) {
        return error
    }
});

const commentSlice = createSlice({
    name: "comments",
    initialState,
    extraReducers: {
        [addComment.pending]: (state) => {
            state.loading = true;
        },
        [addComment.fulfilled]: (state, action) => {
            state.loading = false
            state.comments = action.payload
        },
        [addComment.rejected]: (state) => {
            state.loading = false
            state.comments = []
            state.error = "ERROR_OCCURRED"
        },
        [getCommentsOfAPost.pending]: (state) => {
            state.loading = true;
        },
        [getCommentsOfAPost.fulfilled]: (state, action) => {
            state.loading = false
            state.comments = action.payload
        },
        [getCommentsOfAPost.rejected]: (state) => {
            state.loading = false
            state.comments = []
            state.error = "ERROR_OCCURRED"
        },
        [upVoteComment.pending]: (state) => {
            state.loading = true;
        },
        [upVoteComment.fulfilled]: (state, action) => {
            state.loading = false
            state.comments = action.payload
        },
        [upVoteComment.rejected]: (state) => {
            state.loading = false
            state.comments = []
            state.error = "ERROR_OCCURRED"
        },
        [downVoteComment.pending]: (state) => {
            state.loading = true;
        },
        [downVoteComment.fulfilled]: (state, action) => {
            state.loading = false
            state.comments = action.payload
        },
        [downVoteComment.rejected]: (state) => {
            state.loading = false
            state.comments = []
            state.error = "ERROR_OCCURRED"
        },
        [deleteComment.pending]: (state) => {
            state.loading = true;
        },
        [deleteComment.fulfilled]: (state, action) => {
            state.loading = false
            state.comments = action.payload
        },
        [deleteComment.rejected]: (state) => {
            state.loading = false
            state.comments = []
            state.error = "ERROR_OCCURRED"
        },
        [editComment.pending]: (state) => {
            state.loading = true;
        },
        [editComment.fulfilled]: (state, action) => {
            state.loading = false
            state.comments = action.payload
        },
        [editComment.rejected]: (state) => {
            state.loading = false
            state.comments = []
            state.error = "ERROR_OCCURRED"
        },
    }
});

export { addComment, getCommentsOfAPost, upVoteComment, downVoteComment, deleteComment, editComment };
const { reducer } = commentSlice;
export { reducer };