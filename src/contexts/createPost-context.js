import { useEffect, useState, useReducer, createContext, useContext } from 'react';
import {
    CREATE_POST_TEXT,
    CREATE_POST_EMOJI,
    CREATE_POST_MEDIA,
    CREATE_POST_CLEAR,
    COMMENT_TEXT,
    COMMENT_EMOJI,
    COMMENT_MEDIA,
    COMMENT_CLEAR
} from "../constants/createPostConstants";

const createPostContext = createContext({ text: "" });

const CreatePostProvider = ({ children }) => {

    const initialcreatePostState = {
        content: "",
        mediaLinks: []
    };

    const initialCommentState = {
        content: "",
        mediaLinks: []
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
                    mediaLinks: [...state.mediaLinks, action.payload]
                }
            case CREATE_POST_CLEAR:
                return {
                    ...state,
                    content: "",
                    mediaLinks: []
                }
            default:
                return state
        }
    }

    const commentReducer = (state, action) => {
        switch (action.type) {
            case COMMENT_TEXT:
                return {
                    ...state,
                    content: action.payload
                }
            case COMMENT_EMOJI:
                return {
                    ...state,
                    content: state.content + action.payload
                }
            case COMMENT_MEDIA:
                return {
                    ...state,
                    mediaLinks: [...state.mediaLinks, action.payload]
                }
            case COMMENT_CLEAR:
                return {
                    ...state,
                    content: "",
                    mediaLinks: []
                }
            default:
                return state
        }
    }

    const [chosenEmoji, setChosenEmoji] = useState('');

    const [chosenEmojiForCommentBox, setChosenEmojiForCommentBox] = useState('');

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject.emoji);
    };

    const onCommentBoxEmojiClick = (event, emojiObject) => {
        console.log(emojiObject)
        setChosenEmojiForCommentBox(emojiObject.emoji);
    };

    const [showCommentBoxEmojiPicker, setShowCommentBoxEmojiPicker] = useState(false);

    const [createPostState, dispatchOfCreatePostState] = useReducer(createPostReducer, initialcreatePostState);

    const [commentState, dispatchOfCommentState] = useReducer(commentReducer, initialCommentState);

    const [commentDialogOfCardWithId, setCommentDialogOfCardWithId] = useState("");

    const [editBoxWithCommentId, setEditBoxWithCommentId] = useState("");

    useEffect(() => {
        dispatchOfCreatePostState({ type: CREATE_POST_EMOJI, payload: chosenEmoji })
    }, [chosenEmoji])

    useEffect(() => {
        dispatchOfCommentState({ type: COMMENT_EMOJI, payload: chosenEmojiForCommentBox })
    }, [chosenEmojiForCommentBox])

    return <createPostContext.Provider
        value={{
            createPostState,
            dispatchOfCreatePostState,
            chosenEmoji,
            setChosenEmoji,
            onEmojiClick,
            showEmojiPicker,
            setShowEmojiPicker,
            commentDialogOfCardWithId,
            setCommentDialogOfCardWithId,
            commentState,
            dispatchOfCommentState,
            showCommentBoxEmojiPicker,
            setShowCommentBoxEmojiPicker,
            chosenEmojiForCommentBox, 
            setChosenEmojiForCommentBox,
            onCommentBoxEmojiClick,
            editBoxWithCommentId,
            setEditBoxWithCommentId
        }}>
        {children}
    </createPostContext.Provider>
}

const useCreatePostContext = () => useContext(createPostContext);

export { useCreatePostContext, CreatePostProvider };