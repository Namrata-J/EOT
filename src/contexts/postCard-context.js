import { useReducer, createContext, useContext } from "react";

const postCardContext = createContext(null);

const PostCardProvider = ({ children }) => {

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