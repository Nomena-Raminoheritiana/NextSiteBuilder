import React, {ReactElement, Suspense, useState} from 'react'
import {Alert, Backdrop, Box, Button, Fade, Modal, Snackbar} from "@mui/material";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import {SxProps} from "@mui/system";
import useIsMobile from "@/Hooks/useIsMobile.hook";

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '90vh',
    backgroundColor: '#ffffff',
    boxShadow: 24,
    py:4,
    zIndex:9999,
    width: {
        xs: '95vw',
        md: 'auto'
    }
};

interface MainModalProps {
    handleMainButtonClick?: (e:React.MouseEvent) => Promise<boolean>;
    handleCancel?: (e:React.MouseEvent) => void;
    mainButtonLabel?: string | null | ReactElement | ReactElement[];
    cancelButtonLabel?: string | null;
    mainButtonProps?: {
      display?:boolean;
      sx?: SxProps
    };
    cancelButtonProps?: {
        refresh?:boolean;
        display?:boolean;
        sx?: SxProps
    }
    children : ReactElement | ReactElement[]
}

const defaultCancelButtonProps = {
    display:true,
    sx:{},
    refresh: false
}

const defaultMainButtonProps = {
    display:true,
    sx:{}
}

const MainModal:React.FC<MainModalProps> = (props) => {
    const {
        handleMainButtonClick,
        handleCancel,
        mainButtonProps = defaultMainButtonProps,
        mainButtonLabel,
        cancelButtonLabel,
        cancelButtonProps = defaultCancelButtonProps,
        children
    } = props

    const mainButtonPropsMixed = {...defaultMainButtonProps, ...mainButtonProps}
    const cancelButtonPropsMixed = {...defaultCancelButtonProps, ...cancelButtonProps}

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
    const [openSuccessSnackBar, setOpenSuccessSnackBar] = React.useState(false);
    const [openErrorSnackBar, setOpenErrorSnackBar] = React.useState(false);
    const [loading, setLoading] =  useState<boolean>(false);
    const isMobile = useIsMobile()
    const handleSaveClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(handleMainButtonClick) {
            const processed = await handleMainButtonClick(e);
            processed ? setOpenSuccessSnackBar(true) : setOpenErrorSnackBar(true)
        }
        setIsModalOpen(false);
    }

    const handleCancelClick = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
        if (handleCancel) {
            handleCancel(e);
        }
        if(cancelButtonPropsMixed?.refresh) {
            window.location.reload()
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
                            maxHeight: '80vh',
                            px: 4
                        }}>
                            {children}
                        </Box>
                        <Box mt={3} sx={{display:'flex', justifyContent:'flex-end',  px: 4}}>
                            {
                                mainButtonPropsMixed?.display &&
                                <Button
                                    onClick={handleSaveClick}
                                    variant="contained"
                                    sx={mainButtonPropsMixed.sx}
                                >
                                    { loading ?  <>
                                        <HourglassTopIcon />
                                        LOADING...
                                    </> : mainButtonLabel || <><SaveIcon sx={{mr:isMobile?0:1}} /> {isMobile ? '' : 'Save and close'}</> }
                                </Button>
                            }

                            {
                                cancelButtonPropsMixed?.display &&
                                <Button
                                    onClick={handleCancelClick}
                                    variant="contained"
                                    color={"error"}
                                    sx={{
                                        backgroundColor:"#dc3545",
                                        ml: 2,
                                        ...cancelButtonPropsMixed.sx
                                    }}
                                >
                                    {cancelButtonLabel || <><CancelIcon sx={{mr:isMobile?0:1}}/> {isMobile ? '' : 'Cancel'}</>}
                                </Button>
                            }

                        </Box>
                    </Suspense>
                </Box>
            </Fade>
        </Modal>
    </>
}

export default MainModal