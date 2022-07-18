import { createSlice } from "@reduxjs/toolkit";
import { initialHelperText } from "../../../constants/authCardHelperText";

const initialState = {
    signUpHelperText: initialHelperText,
    logInHelperText: initialHelperText
};

const helperTextSlice = createSlice({
    name: "helperText",
    initialState,
    reducers: {
        setSignUpEmailHelperText: (state, action) => {
            state.signUpHelperText.email = action.payload
        },
        setSignUpPwdHelperText: (state, action) => {
            state.signUpHelperText.pwd = action.payload
        },
        setLogInEmailHelperText: (state, action) => {
            state.logInHelperText.email = action.payload
        },
        setLogInPwdHelperText: (state, action) => {
            state.logInHelperText.pwd = action.payload
        }
    }
});

const { reducer, actions } = helperTextSlice;
export const {
    setSignUpEmailHelperText,
    setSignUpPwdHelperText,
    setLogInEmailHelperText,
    setLogInPwdHelperText } = actions;
export { reducer };