import React, {ReactElement, Suspense, useContext, useRef, useState} from 'react'
import {Alert, Backdrop, Box, Button, Fade, Modal, Snackbar} from "@mui/material";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import getId from "@/builder/src/Utils/HTML/getId";
import updateTextById from "@/builder/src/services/setData/updateTextById";
import saveModelProps from "@/builder/src/services/apiCall/model/saveModelProps";

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '90vh',
    backgroundColor: '#ffffff',
    boxShadow: 24,
    p: 4,
    zIndex:9999
};

interface MainModalProps {
    handleMainButtonClick: (e:React.MouseEvent) => Promise<void>;
    handleCancel?: (e:React.MouseEvent) => void;
    mainButtonLabel?: string | null;
    cancelButtonLabel?: string | null;
    children : ReactElement | ReactElement[]
}

const MainModal:React.FC<MainModalProps> = (props) => {
    const {
        handleMainButtonClick,
        handleCancel,
        mainButtonLabel,
        cancelButtonLabel,
        children
    } = props

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
    const [openSuccessSnackBar, setOpenSuccessSnackBar] = React.useState(false);
    const [loading, setLoading] =  useState<boolean>(false);
    const handleSaveClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        await handleMainButtonClick(e);
        setIsModalOpen(false);
        setOpenSuccessSnackBar(true);
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        if (handleCancel) {
            handleCancel(e)
        }
    }

    return <>
        <Snackbar open={openSuccessSnackBar} autoHideDuration={6000} onClose={() => setOpenSuccessSnackBar(false)}>
            <Alert
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Your data is successfully saved
            </Alert>
        </Snackbar>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isModalOpen}
            onClose={handleCancelClick}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isModalOpen}>
                <Box sx={modalStyle}>
                    <Suspense fallback={'loading...'}>
                        <Box sx={{
                            overflow: 'auto',
                            maxHeight: '80vh'
                        }}>
                            {children}
                        </Box>
                        <Box mt={3} sx={{display:'flex', justifyContent:'flex-end'}}>
                            <Button
                                onClick={handleSaveClick}
                                variant="contained"
                            >
                                { loading ?  <>
                                    <HourglassTopIcon />
                                    LOADING...
                                </> : mainButtonLabel || "Save and close" }
                            </Button>
                            <Button
                                onClick={handleCancelClick}
                                variant="contained"
                                color={"error"}
                                sx={{
                                    backgroundColor:"#dc3545",
                                    ml: 2
                                }}
                            >
                                {cancelButtonLabel || 'Cancel'}
                            </Button>
                        </Box>
                    </Suspense>
                </Box>
            </Fade>
        </Modal>
    </>
}

export default MainModal