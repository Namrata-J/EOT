import { initialHelperText } from "../constants/AuthCardHelperText";
import React, { useState, createContext, useContext } from "react";
import { useDispatch } from "react-redux";
import {
    setSignUpEmailHelperText,
    setSignUpPwdHelperText,
    setLogInEmailHelperText,
    setLogInPwdHelperText
} from "../redux/features/authentication/helperTextSlice";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [userSignUpForm, setUserSignUpForm] = useState({ userEmail: '', userPwd: '' });
    const [userLogInForm, setUserLogInForm] = useState({ userEmail: '', userPwd: '' });
    const dispatch = useDispatch();

    const errorAttr = (uniqueId, text) => {
        switch (uniqueId) {
            case "SIGNUP_EMAIL":
            case "LOGIN_EMAIL":
                return text === '' || text === initialHelperText.email ? false : true
            case "SIGNUP_PWD":
            case "LOGIN_PWD":
                return text === '' || text === initialHelperText.pwd ? false : true
            default:
                return false
        }
    }

    const handleChange = (e, uniqueId) => {
        switch (uniqueId) {
            case "SIGNUP_EMAIL":
                dispatch(setSignUpEmailHelperText(""))
                // setSignUpHelperText({ ...signUpHelperText, email: "" })
                setUserSignUpForm({ ...userSignUpForm, userEmail: e.target.value })
                break;
            case "SIGNUP_PWD":
                dispatch(setSignUpPwdHelperText(""))
                // setSignUpHelperText({ ...signUpHelperText, pwd: "" })
                setUserSignUpForm({ ...userSignUpForm, userPwd: e.target.value })
                break;
            case "LOGIN_EMAIL":
                dispatch(setLogInEmailHelperText(""))
                // setLogInHelperText({ ...logInHelperText, email: "" })
                setUserLogInForm({ ...userLogInForm, userEmail: e.target.value })
                break;
            case "LOGIN_PWD":
                dispatch(setLogInPwdHelperText(""))
                // setLogInHelperText({ ...logInHelperText, pwd: "" })
                setUserLogInForm({ ...userLogInForm, userPwd: e.target.value })
                break;
            default:
                setUserSignUpForm({ userEmail: '', userPwd: '' })
        }
    }

    return <authContext.Provider
        value={{
            userSignUpForm,
            userLogInForm,
            handleChange,
            errorAttr,
        }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
