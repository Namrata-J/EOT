import React, { useState, createContext, useContext } from "react";

const authContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [userSignUpForm, setUserSignUpForm] = useState({ userEmail: '', userPwd: '' });

    const handleChange = (e, uniqueId) => {
        switch (uniqueId) {
            case "SIGNUP_EMAIL":
                setUserSignUpForm({ ...userSignUpForm, userEmail: e.target.value })
                break;
            case "SIGNUP_PWD":
                setUserSignUpForm({ ...userSignUpForm, userPwd: e.target.value })
                break;
            default:
                setUserSignUpForm({ userEmail: '', userPwd: '' })
        }
    }

    return <authContext.Provider value={{ handleChange, setUserSignUpForm, userSignUpForm }}>
        {children}
    </authContext.Provider>
}

const useAuth = () => useContext(authContext);

export { useAuth, AuthProvider };
