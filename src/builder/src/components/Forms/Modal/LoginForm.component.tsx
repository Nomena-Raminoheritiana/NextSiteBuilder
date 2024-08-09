import React, {Suspense, useEffect, useRef, useState} from "react"
import {Backdrop, Box, Button, Fade, Modal, TextField, Typography} from "@mui/material";
import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import Login from "@/builder/src/services/apiCall/login/Login";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex:9999
};

interface LoginFormInterface {
    apiConfig: ApiConfigInterface
}

const LoginForm: React.FC<LoginFormInterface> = ({
    apiConfig
                                                 }) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [loading, setLoading] =  useState<boolean>(false);
    const inputUsernameRef = useRef<HTMLInputElement>();
    const inputPasswordRef = useRef<HTMLInputElement>();

    useEffect(() => {
       const logoComponents = document.querySelectorAll('[data-component-name="Logo"]');
       const handleDblclick = (e) => {
           e.preventDefault();
           setIsModalOpen(true);
       }
       if(logoComponents.length > 0) {
           logoComponents.forEach((logoComponent) => {
               logoComponent.addEventListener('dblclick',handleDblclick)
           })
       }

       return () => {
           const logoComponents = document.querySelectorAll('[data-component-name="Logo"]');
           if(logoComponents.length > 0) {
               logoComponents.forEach((logoComponent) => {
                   logoComponent.removeEventListener('dblclick', handleDblclick)
               })
           }
       }
    }, [])

    const onLogin = async (e) => {
        e.preventDefault();
        setLoading(true)
        const isLogged = await Login(
            apiConfig,
            inputUsernameRef?.current?.value as string,
            inputPasswordRef?.current?.value as string
        );
        setLoading(false)
        setIsModalOpen(false)
    }

    const onCancelClick = (e) => {
        e.preventDefault();
        handleClose();
    }

    const handleClose = (saveContent = false) => {
        setIsModalOpen(false);
    }

    return <>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isModalOpen}
            onClose={handleClose}
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
                        <Typography variant={'h6'} sx={{textAlign:'left'}}>
                            Login
                        </Typography>
                        <Box>
                            <TextField sx={{mt:2}}  inputRef={inputUsernameRef}  fullWidth label="Enter your email adress" />
                            <TextField sx={{mt:2}}  inputRef={inputPasswordRef}  fullWidth label="password" type={"password"} />
                        </Box>
                        <Box mt={3}>
                            <Button
                                onClick={onLogin}
                                variant="contained"
                            >
                                { loading ?  <>
                                    <HourglassTopIcon />
                                    LOADING...
                                </> : "Login" }
                            </Button>
                            <Button
                                onClick={onCancelClick}
                                variant="contained"
                                sx={{
                                    backgroundColor:"#dc3545",
                                    ml: 2
                                }}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </Suspense>
                </Box>
            </Fade>
        </Modal>
    </>
}

export default LoginForm