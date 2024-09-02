import React, {ReactElement, Suspense, useState} from 'react'
import {Alert, Backdrop, Box, Button, Fade, Modal, Snackbar} from "@mui/material";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import {SxProps} from "@mui/system";
import useIsMobile from "@/Hooks/useIsMobile.hook";
import PreviewButtonComponent from "@/builder/src/components/Forms/CustomButton/PreviewButton.component";
import ToastComponent from "@/builder/src/components/Toast/Toast.component";

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
    handleMainButtonClick?: (e:React.MouseEvent) => Promise<boolean> | void;
    handleCancel?: (e:React.MouseEvent) => void;
    mainButtonLabel?: string | null | ReactElement | ReactElement[];
    cancelButtonLabel?: string | null;
    mainButtonProps?: {
      display?:boolean;
      sx?: SxProps;
      closeAfterClick?:boolean;
      refresh?:boolean;
      verifyResponseAfterClick?:boolean;
    };
    cancelButtonProps?: {
        refresh?:boolean;
        display?:boolean;
        sx?: SxProps
    };
    injectMoreButtons?: () => ReactElement
    children : ReactElement | ReactElement[]
}

const defaultCancelButtonProps = {
    display:true,
    sx:{},
    refresh: false
}

const defaultMainButtonProps = {
    display:true,
    sx:{},
    closeAfterClick:true,
    refresh: false,
    verifyResponseAfterClick: true
}

const MainModal:React.FC<MainModalProps> = (props) => {
    const {
        handleMainButtonClick,
        handleCancel,
        mainButtonProps = defaultMainButtonProps,
        mainButtonLabel,
        cancelButtonLabel,
        cancelButtonProps = defaultCancelButtonProps,
        injectMoreButtons,
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
            mainButtonPropsMixed?.verifyResponseAfterClick && (
                processed ? setOpenSuccessSnackBar(true) : setOpenErrorSnackBar(true)
            )
        }
        setLoading(false);
        mainButtonPropsMixed?.closeAfterClick && setIsModalOpen(false);
        mainButtonPropsMixed?.refresh && window.location.reload();
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
        <ToastComponent
            message={'Your data is successfully saved'}
            open={openSuccessSnackBar}
            onClose={() => setOpenSuccessSnackBar(false)}
        />
        <ToastComponent
            message={'Something went wrong while processing data'}
            severity={'error'}
            open={openErrorSnackBar}
            onClose={() => setOpenErrorSnackBar(false)}
        />
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
                <Box sx={modalStyle} className={'modal-container'}>
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
                                injectMoreButtons ? injectMoreButtons() : ''
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