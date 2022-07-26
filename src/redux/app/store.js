import { configureStore } from "@reduxjs/toolkit";
import { reducer as postReducer } from "../features/post/postSlice";
import { reducer as userReducer } from "../features/user/userSlice";
import { reducer as commentReducer } from "../features/comment/commentSlice";
import { reducer as authReducer } from "../features/authentication/authSlice";
import { reducer as helperTextReducer } from "../features/authentication/helperTextSlice";

export const store = configureStore({
    reducer: {
        authHelperText: helperTextReducer,
        auth: authReducer,
        user: userReducer,
        post: postReducer,
        comment: commentReducer,
    },
});