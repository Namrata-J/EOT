import { configureStore } from "@reduxjs/toolkit";
import { reducer as userReducer } from "../features/user/userSlice";
import { reducer as authReducer } from "../features/authentication/authSlice";
import { reducer as helperTextReducer } from "../features/authentication/helperTextSlice";

export const store = configureStore({
    reducer: {
        authHelperText: helperTextReducer,
        auth: authReducer,
        user: userReducer
    },
});