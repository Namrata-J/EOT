import "./emojiPicker.css";
import Picker from 'emoji-picker-react';
import { emojiPicker } from "../../utils/commonStyles";
import { useCreatePostContext } from "../../contexts/createPost-context";

const EmojiPicker = ({ btnType }) => {

    const {
        onEmojiClick,
        showEmojiPicker,
        showCommentBoxEmojiPicker,
        onCommentBoxEmojiClick } = useCreatePostContext();

    return (
        <>
            {
                showEmojiPicker && btnType === "POST" ?
                    <Picker
                        onEmojiClick={onEmojiClick}
                        pickerStyle={emojiPicker}
                    /> : showCommentBoxEmojiPicker && btnType === "COMMENT" ?
                        <Picker
                            onEmojiClick={onCommentBoxEmojiClick}
                            pickerStyle={emojiPicker}
                        /> : showCommentBoxEmojiPicker && btnType === "SAVE" ?
                            <Picker
                                onEmojiClick={onCommentBoxEmojiClick}
                                pickerStyle={{ ...emojiPicker, width: '90%' }}
                            /> : ""
            }
        </>
    );
}

export { EmojiPicker };