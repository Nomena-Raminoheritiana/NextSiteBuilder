import React, {Suspense, useContext, useRef, useState} from "react"
import {Backdrop, Box, Button, Fade, Modal, Typography} from "@mui/material";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import getId from "@/builder/src/services/getId";
import savePageProps from "@/builder/src/services/apiCall/page/savePageProps";
import deleteElementById from "@/builder/src/services/setData/deleteElementById";

export interface TextareaFormProps {
    targetHtmlElement:HTMLElement;
    handleCloseContextMenu?:() => void;
}

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

const DeleteConfirmationComponent: React.FC<TextareaFormProps> = (props) => {
    const {
        targetHtmlElement,
        handleCloseContextMenu
    } = props

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)

    const textAreaRef = useRef(null);
    const dataContextValue = useContext(BuilderContext);


    const defaultTextContent = targetHtmlElement ? targetHtmlElement?.textContent : "";
    const onDeleteClick = async (e) => {
        e.preventDefault();
        const copyOfDataContext = {...dataContextValue?.dataContext};
        console.log(copyOfDataContext)
        const pageId = dataContextValue.pageId;
        const apiConfig = dataContextValue.apiConfig
        const targetId = getId(targetHtmlElement);
        if(targetId) {
            console.log('ato')
            const deleted = deleteElementById(
                copyOfDataContext,
                targetId
            )
            console.log('deleted ', deleted)
            console.log(copyOfDataContext)
            if(deleted) {
               const saved = await savePageProps(pageId, apiConfig, copyOfDataContext);
               saved && dataContextValue?.setDataContext && dataContextValue?.setDataContext(copyOfDataContext)
            }
        }
        handleClose(true);
        targetHtmlElement.remove();
    }

    const onCancelClick = (e) => {
        e.preventDefault();
        handleClose();
    }

    const handleClose = (saveContent = false) => {
        setIsModalOpen(false);
        !saveContent && targetHtmlElement && (targetHtmlElement.textContent = defaultTextContent)
        if (handleCloseContextMenu) {
            setTimeout(() => handleCloseContextMenu(), 1000);
        }
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
                        <Typography variant={'h6'} sx={{mb:2, textAlign:'left'}}>
                            Are you sure to delete the element ?
                        </Typography>
                        <Typography paragraph={true} sx={{mb:2, textAlign:'left', fontSize:'15px'}}>
                            This action is no longer reversible
                        </Typography>
                        <Button onClick={onDeleteClick} sx={{color:'red'}}>Delete</Button>
                        <Button onClick={onCancelClick} >Cancel</Button>
                    </Suspense>
                </Box>
            </Fade>
        </Modal>
    </>
}

export default DeleteConfirmationComponent