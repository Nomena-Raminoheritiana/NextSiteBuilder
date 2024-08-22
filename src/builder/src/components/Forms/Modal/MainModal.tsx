import React, {ReactElement, Suspense, useState} from 'react'
import {Alert, Backdrop, Box, Button, Fade, Modal, Snackbar} from "@mui/material";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

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
    mainButtonLabel?: string | null | ReactElement | ReactElement[];
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
    const [openErrorSnackBar, setOpenErrorSnackBar] = React.useState(false);
    const [loading, setLoading] =  useState<boolean>(false);
    const handleSaveClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        const processed = await handleMainButtonClick(e);
        setIsModalOpen(false);
        processed ? setOpenSuccessSnackBar(true) : setOpenErrorSnackBar(true)
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
        <Snackbar open={openErrorSnackBar} autoHideDuration={6000} onClose={() => setOpenErrorSnackBar(false)}>
            <Alert
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                Something went wrong while processing data
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
                                </> : mainButtonLabel || <><SaveIcon sx={{mr:1}} /> Save and close</> }
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
                                {cancelButtonLabel || <><CancelIcon sx={{mr:1}}/> Cancel</>}
                            </Button>
                        </Box>
                    </Suspense>
                </Box>
            </Fade>
        </Modal>
    </>
}

export default MainModal