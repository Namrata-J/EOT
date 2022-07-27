import { useEffect, useReducer, createContext, useContext } from "react";
import { getAllUsers } from "../redux/features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";

const postCardContext = createContext(null);

const PostCardProvider = ({ children }) => {

    const { loggedInUser } = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const postCardReducer = (state, action) => {
        switch (action.type) {
            case "OPTIONS_POPUP":
                return state.includes(action.payload) ?
                    [...state].filter((id) => id !== action.payload) :
                    [...state, action.payload]

            default:
                return state
        }
    }

    const [stateOfPostCard, dispatchOfPostCard] = useReducer(postCardReducer, []);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [loggedInUser, dispatch]);

    return (
        <postCardContext.Provider
            value={{
                stateOfPostCard,
                dispatchOfPostCard
            }}>
            {children}
        </postCardContext.Provider>
    );
}

const usePostCard = () => useContext(postCardContext);

export { usePostCard, PostCardProvider };