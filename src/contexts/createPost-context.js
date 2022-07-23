import { useEffect, useState, useReducer, createContext, useContext } from 'react';
import { CREATE_POST_TEXT, CREATE_POST_EMOJI, CREATE_POST_MEDIA, CREATE_POST_CLEAR } from "../constants/createPostConstants";

const createPostContext = createContext({ text: "" });

const CreatePostProvider = ({ children }) => {

    const initialcreatePostState = {
        content: "",
        media: []
    };

    const createPostReducer = (state, action) => {
        switch (action.type) {
            case CREATE_POST_TEXT:
                return {
                    ...state,
                    content: action.payload
                }
            case CREATE_POST_EMOJI:
                return {
                    ...state,
                    content: state.content + action.payload
                }
            case CREATE_POST_MEDIA:
                return {
                    ...state,
                    media: [...state.media, action.payload]
                }
            case CREATE_POST_CLEAR:
                return {
                    ...state,
                    content: "",
                    media: []
                }
            default:
                return state
        }
    }

    const [chosenEmoji, setChosenEmoji] = useState('');

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject.emoji);
    };

    const [createPostState, dispatchOfCreatePostState] = useReducer(createPostReducer, initialcreatePostState);

    useEffect(() => {
        dispatchOfCreatePostState({ type: CREATE_POST_EMOJI, payload: chosenEmoji })
    }, [chosenEmoji])

    return <createPostContext.Provider
        value={{
            createPostState,
            dispatchOfCreatePostState,
            chosenEmoji,
            setChosenEmoji,
            onEmojiClick,
            showEmojiPicker,
            setShowEmojiPicker
        }}>
        {children}
    </createPostContext.Provider>
}

const useCreatePostContext = () => useContext(createPostContext);

export { useCreatePostContext, CreatePostProvider };