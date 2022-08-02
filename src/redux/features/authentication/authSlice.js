import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
    invalidEmail,
    mandatoryFieldText,
    regex
} from "../../../constants/authCardHelperText";
import {
    setSignUpEmailHelperText,
    setSignUpPwdHelperText,
    setLogInEmailHelperText,
    setLogInPwdHelperText
} from "./helperTextSlice";
import axios from "axios";

const userLogInToken = localStorage.getItem("token");
const userLogInId = localStorage.getItem("loggedInUserId");

const initialState = {
    error: "",
    loading: false,
    userId: userLogInId ? userLogInId : "",
    encodedToken: userLogInToken ? userLogInToken : "",
    isUserLoggedIn: userLogInToken ? true : false,
};

const signUpHandler = createAsyncThunk("auth/signUp", async ({ userEmail, userPwd }, thunkAPI) => {
    if (userEmail !== '') {
        if (userPwd !== '') {
            if (regex.test(userEmail)) {
                try {
                    const response = await axios.post(`/api/auth/signup`, {
                        email: userEmail,
                        password: userPwd
                    });
                    localStorage.setItem("token", response.data.encodedToken);
                    localStorage.setItem("loggedInUserId", response.data.createdUser._id);
                    window.location.reload()
                    return response.data;
                } catch (error) {
                    console.log("ERROR OCCURRED");
                    return thunkAPI.rejectWithValue();
                }
            } else {
                thunkAPI.dispatch(setSignUpEmailHelperText(invalidEmail))
            }
        } else {
            thunkAPI.dispatch(setSignUpPwdHelperText(mandatoryFieldText))
        }
    } else {
        thunkAPI.dispatch(setSignUpEmailHelperText(mandatoryFieldText))
    }
});

const logInHandler = createAsyncThunk("auth/logIn", async ({ userEmail, userPwd }, thunkAPI) => {
    if (userEmail !== '') {
        if (userPwd !== '') {
            if (regex.test(userEmail)) {
                try {
                    const response = await axios.post(`/api/auth/login`, {
                        email: userEmail,
                        password: userPwd
                    });
                    localStorage.setItem("token", response.data.encodedToken);
                    localStorage.setItem("loggedInUserId", response.data.foundUser._id);
                    window.location.reload()
                    return response.data
                } catch (error) {
                    console.log("ERROR OCCURRED");
                    return thunkAPI.rejectWithValue();
                }
            } else {
                thunkAPI.dispatch(setLogInEmailHelperText(invalidEmail))
            }
        } else {
            thunkAPI.dispatch(setLogInPwdHelperText(mandatoryFieldText))
        }
    } else {
        thunkAPI.dispatch(setLogInEmailHelperText(mandatoryFieldText))
    }
})

const guestLogInHandler = createAsyncThunk("auth/guestLogIn", async (thunkAPI) => {
    try {
        const response = await axios.post(`/api/auth/login`, {
            email: "adarshbalika@gmail.com",
            password: "adarshBalika123",
        });
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("loggedInUserId", response.data.foundUser._id);
        window.location.reload()
        return response.data
    } catch (error) {
        console.log("ERROR OCCURRED");
        return thunkAPI.rejectWithValue();
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logoutHandler: (state) => {
            state.userId = ""
            state.encodedToken = ""
            state.isUserLoggedIn = false
            localStorage.removeItem("token")
            localStorage.removeItem("loggedInUserId")
        }
    },
    extraReducers: {
        [signUpHandler.pending]: (state) => {
            state.loading = true
        },
        [signUpHandler.fulfilled]: (state, action) => {
            state.loading = false
            state.userId = action.payload.createdUser._id
            state.isUserLoggedIn = action.payload.encodedToken ? true : false
            state.encodedToken = action.payload.encodedToken ? action.payload.encodedToken : ""
        },
        [signUpHandler.rejected]: (state, action) => {
            state.loading = false
            state.userId = ""
            state.encodedToken = ""
            state.isUserLoggedIn = false
            state.error = action.error.message
        },
        [logInHandler.pending]: (state) => {
            state.loading = true
        },
        [logInHandler.fulfilled]: (state, action) => {
            state.loading = false
            state.userId = action.payload.foundUser._id
            state.isUserLoggedIn = action.payload.encodedToken ? true : false
            state.encodedToken = action.payload.encodedToken ? action.payload.encodedToken : ""
        },
        [logInHandler.rejected]: (state, action) => {
            state.loading = false
            state.encodedToken = ""
            state.isUserLoggedIn = false
            state.error = action.error.message
        },
        [guestLogInHandler.pending]: (state) => {
            state.loading = true
        },
        [guestLogInHandler.fulfilled]: (state, action) => {
            state.loading = false
            state.userId = action.payload.foundUser._id
            state.isUserLoggedIn = action.payload.encodedToken ? true : false
            state.encodedToken = action.payload.encodedToken ? action.payload.encodedToken : ""
        },
        [guestLogInHandler.rejected]: (state, action) => {
            state.loading = false
            state.encodedToken = ""
            state.isUserLoggedIn = false
            state.error = action.error.message
        },
    }
});

export { signUpHandler, logInHandler, guestLogInHandler };
const { reducer, actions } = authSlice;
export const { logoutHandler } = actions;
export { reducer };