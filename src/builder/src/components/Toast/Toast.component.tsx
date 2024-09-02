import React, {ReactElement} from 'react'
import {Alert, Snackbar} from "@mui/material";

interface SuccessToastInterface {
    open?:boolean;
    onClose?:(e:React.MouseEvent) => void;
    message: ReactElement | HTMLElement | string;
    severity?: string
}

const ToastComponent:React.FC<SuccessToastInterface> = (props) => {
    const {open, onClose, message, severity} = props;
    return <>
        <Snackbar open={open} autoHideDuration={6000} onClose={(e:React.MouseEvent) => onClose ? onClose(e) : () => {}}>
            <Alert
                severity={severity || 'success'}
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    </>
}

export default ToastComponent