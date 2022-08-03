import { useModal } from "../../contexts/";
import { Box, Modal } from '@mui/material';
import { flexCenter, scrollbar } from "../../utils/commonStyles";

const ModalBox = ({ children }) => {
    
    const { open } = useModal();

    return (
        <Modal
            open={open}
            sx={flexCenter}
        >
            <Box
                sx={{
                    ...scrollbar,
                    backgroundColor: 'primary.dark',
                    borderRadius: 1,
                    outline: 'none',
                    m: 1,
                    flexGrow: 1,
                    minWidth: '15rem',
                    maxWidth: '25rem',
                    height: '28rem',
                    p: 2
                }}
            >
                {children}
            </Box>
        </Modal>

    );
}

export { ModalBox };