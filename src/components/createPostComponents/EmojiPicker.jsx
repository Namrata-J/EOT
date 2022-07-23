import "./emojiPicker.css";
import Picker from 'emoji-picker-react';
import { emojiPicker } from "../../utils/commonStyles";
import { useCreatePostContext } from "../../contexts/createPost-context";

const EmojiPicker = () => {

    const { onEmojiClick, showEmojiPicker } = useCreatePostContext();

    return (
        <>
            {
                showEmojiPicker && <Picker
                    onEmojiClick={onEmojiClick}
                    pickerStyle={emojiPicker} />
            }
        </>
    );
}

export { EmojiPicker };