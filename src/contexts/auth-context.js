import { initialHelperText, mandatoryFieldText, invalidEmail } from "../constants/AuthCardHelperText";
import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [userSignUpForm, setUserSignUpForm] = useState({ userEmail: '', userPwd: '' });
    const [userLogInForm, setUserLogInForm] = useState({ userEmail: '', userPwd: '' });
    const [signUpFormHelperText, setSignUpFormHelperText] = useState(initialHelperText);
    const navigate = useNavigate();

    const errorAttr = (uniqueId, text) => {
        switch (uniqueId) {
            case "SIGNUP_EMAIL":
                return text === '' || text === initialHelperText.email ? false : true
            case "SIGNUP_PWD":
                return text === '' || text === initialHelperText.pwd ? false : true
            default:
                return false
        }
    }

    const handleChange = (e, uniqueId) => {
        switch (uniqueId) {
            case "SIGNUP_EMAIL":
                setSignUpFormHelperText({ ...signUpFormHelperText, email: "" })
                setUserSignUpForm({ ...userSignUpForm, userEmail: e.target.value })
                break;
            case "SIGNUP_PWD":
                setSignUpFormHelperText({ ...signUpFormHelperText, pwd: "" })
                setUserSignUpForm({ ...userSignUpForm, userPwd: e.target.value })
                break;
            case "LOGIN_EMAIL":
                setUserLogInForm({ ...userLogInForm, userEmail: e.target.value })
                break;
            case "LOGIN_PWD":
                setUserLogInForm({ ...userLogInForm, userPwd: e.target.value })
                break;
            default:
                setUserSignUpForm({ userEmail: '', userPwd: '' })
        }
    }

    const signUpHandler = async () => {
        if (userSignUpForm.userEmail !== '') {
            if (userSignUpForm.userPwd !== '') {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userSignUpForm.userEmail)) {
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
                    setSignUpFormHelperText({ ...signUpFormHelperText, email: invalidEmail })
                }
            } else {
                setSignUpFormHelperText({ ...signUpFormHelperText, pwd: mandatoryFieldText })
            }
        } else {
            setSignUpFormHelperText({ ...signUpFormHelperText, email: mandatoryFieldText })
        }
    }

    return <authContext.Provider value={{ handleChange, signUpHandler, signUpFormHelperText, errorAttr }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
