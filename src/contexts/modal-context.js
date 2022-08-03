import { useSelector } from "react-redux";
import { useState, useReducer, createContext, useContext } from "react";
import { EDIT_COVERPIC, EDIT_PROFILEPIC, EDIT_FIRSTNAME, EDIT_LASTNAME, EDIT_BIO, EDIT_URL, INITIAL_EDIT_STATE } from "../constants/modalConstants";

const modalContext = createContext(null);

const ModalProvider = ({ children }) => {

    const { loggedInUser } = useSelector((store) => store.user);
    const [open, setOpen] = useState(false);

    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    const initialEditProfileState = {
        coverPic: loggedInUser.coverPic ? loggedInUser.coverPic : "",
        profilePic: loggedInUser.profilePic ? loggedInUser.profilePic : "",
        firstName: loggedInUser.firstName ? loggedInUser.firstName : "",
        lastName: loggedInUser.lastName ? loggedInUser.lastName : "",
        bio: loggedInUser.bio ? loggedInUser.bio : "",
        websiteUrl: loggedInUser.websiteUrl ? loggedInUser.websiteUrl : ""
    };

    const editProfileReducer = (state, action) => {
        switch (action.type) {
            case EDIT_COVERPIC:
                return {
                    ...state, coverPic: action.payload
                }
            case EDIT_PROFILEPIC:
                return {
                    ...state, profilePic: action.payload
                }
            case EDIT_FIRSTNAME:
                return {
                    ...state, firstName: action.payload
                }
            case EDIT_LASTNAME:
                return {
                    ...state, lastName: action.payload
                }
            case EDIT_BIO:
                return {
                    ...state, bio: action.payload
                }
            case EDIT_URL:
                return {
                    ...state, websiteUrl: action.payload
                }
            case INITIAL_EDIT_STATE:
                return {
                    ...state,
                    coverPic: action.payload.coverPic,
                    profilePic: action.payload.profilePic,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    bio: action.payload.bio,
                    websiteUrl: action.payload.websiteUrl
                }
            default:
                return state
        }
    }

    const [editProfileState, dispatchOfEditProfile] = useReducer(editProfileReducer, initialEditProfileState);

    return <modalContext.Provider
        value={{
            open,
            handleOpenModal,
            handleCloseModal,
            editProfileState,
            dispatchOfEditProfile
        }}>
        {children}
    </modalContext.Provider>
}

const useModal = () => useContext(modalContext);

export { useModal, ModalProvider };