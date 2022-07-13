import { initialHelperText, mandatoryFieldText, invalidEmail, regex } from "../constants/AuthCardHelperText";
import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [userSignUpForm, setUserSignUpForm] = useState({ userEmail: '', userPwd: '' });
    const [userLogInForm, setUserLogInForm] = useState({ userEmail: '', userPwd: '' });
    const [signUpHelperText, setSignUpHelperText] = useState(initialHelperText);
    const [logInHelperText, setLogInHelperText] = useState(initialHelperText);
    const navigate = useNavigate();

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
                setSignUpHelperText({ ...signUpHelperText, email: "" })
                setUserSignUpForm({ ...userSignUpForm, userEmail: e.target.value })
                break;
            case "SIGNUP_PWD":
                setSignUpHelperText({ ...signUpHelperText, pwd: "" })
                setUserSignUpForm({ ...userSignUpForm, userPwd: e.target.value })
                break;
            case "LOGIN_EMAIL":
                setLogInHelperText({ ...logInHelperText, email: "" })
                setUserLogInForm({ ...userLogInForm, userEmail: e.target.value })
                break;
            case "LOGIN_PWD":
                setLogInHelperText({ ...logInHelperText, pwd: "" })
                setUserLogInForm({ ...userLogInForm, userPwd: e.target.value })
                break;
            default:
                setUserSignUpForm({ userEmail: '', userPwd: '' })
        }
    }

    const signUpHandler = async () => {
        if (userSignUpForm.userEmail !== '') {
            if (userSignUpForm.userPwd !== '') {
                if (regex.test(userSignUpForm.userEmail)) {
                    try {
                        const response = await axios.post(`/api/auth/signup`, {
                            email: userSignUpForm.userEmail,
                            password: userSignUpForm.userPwd
                        });
                        localStorage.setItem("token", response.data.encodedToken);
                        if (response.data.encodedToken) {
                            navigate("/home")
                        }
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    setSignUpHelperText({ ...signUpHelperText, email: invalidEmail })
                }
            } else {
                setSignUpHelperText({ ...signUpHelperText, pwd: mandatoryFieldText })
            }
        } else {
            setSignUpHelperText({ ...signUpHelperText, email: mandatoryFieldText })
        }
    }

    const logInHandler = async () => {
        if (userSignUpForm.userEmail !== '') {
            if (userSignUpForm.userPwd !== '') {
                if (regex.test(userSignUpForm.userEmail)) {
                    try {
                        const response = await axios.post(`/api/auth/login`, {
                            email: userLogInForm.userEmail,
                            password: userLogInForm.userPwd
                        });
                        localStorage.setItem("token", response.data.encodedToken);
                        if (response.data.encodedToken) {
                            navigate("/home")
                        }
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    setLogInHelperText({ ...logInHelperText, email: invalidEmail })
                }
            } else {
                setLogInHelperText({ ...logInHelperText, pwd: mandatoryFieldText })
            }
        } else {
            setLogInHelperText({ ...logInHelperText, email: mandatoryFieldText })
        }
    }

    const guestLogInHandler = async () => {
        try {
            const response = await axios.post(`/api/auth/login`, {
                email: "adarshbalika@neog.camp",
                password: "adarshBalika123",
            });
            localStorage.setItem("token", response.data.encodedToken);
            if (response.data.encodedToken) {
                navigate("/home")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return <authContext.Provider
        value={{
            handleChange,
            signUpHandler,
            signUpHelperText,
            errorAttr,
            logInHandler,
            logInHelperText,
            guestLogInHandler
        }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
