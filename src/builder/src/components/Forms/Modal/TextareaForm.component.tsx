import React, {Suspense, useContext, useRef, useState} from "react"
import {Backdrop, Box, Button, Fade, Modal, Typography} from "@mui/material";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import updateTextById from "@/builder/src/services/setData/updateTextById";
import getId from "@/builder/src/services/getId";
import savePageProps from "@/builder/src/services/apiCall/page/savePageProps";

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

const TextareaForm: React.FC<TextareaFormProps> = (props) => {
    const {
        targetHtmlElement,
        handleCloseContextMenu
    } = props

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
    const [loading, setLoading] =  useState<boolean>(false);

    const textAreaRef = useRef(null);
    const dataContextValue = useContext(BuilderContext);


    const defaultTextContent = targetHtmlElement ? targetHtmlElement?.textContent : "";
    const onSaveClick = async (e) => {
        e.preventDefault();
        const copyOfDataContext = {...dataContextValue?.dataContext};
        const pageId = dataContextValue.pageId;
        const apiConfig = dataContextValue.apiConfig
        const targetId = getId(targetHtmlElement);
        if(targetId) {
           const updated = updateTextById(
                copyOfDataContext,
                targetId,
                textAreaRef.current.value
           )
            if(updated) {
              setLoading(true);
              const saved = await savePageProps(pageId, apiConfig, copyOfDataContext);
              setLoading(false);
              saved && dataContextValue?.setDataContext && dataContextValue?.setDataContext(copyOfDataContext)
            }
        }
       handleClose(true);
    }

    const onCancelClick = (e) => {
        e.preventDefault();
        handleClose();
    }

    const handleClose = (saveContent = false) => {
        setIsModalOpen(false);
        if(!saveContent) targetHtmlElement.textContent = defaultTextContent
        if(handleCloseContextMenu) setTimeout(() => handleCloseContextMenu(), 1000)
    }

    return <>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isModalOpen}
            onClose={onCancelClick}
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
                        <Typography variant={'h6'} sx={{mb:2}}>Modify the content</Typography>
                        <textarea
                            id="story"
                            name="story"
                            rows="15"
                            cols="100"
                            style={{border: '2px solid grey'}}
                            defaultValue={targetHtmlElement && targetHtmlElement?.textContent}
                            onInput={(e) => targetHtmlElement && (targetHtmlElement.textContent = e.target.value) }
                            ref={textAreaRef}
                        >
                        </textarea>
                        <Box mt={3}>
                            <Button
                                onClick={onSaveClick}
                                variant="contained"
                            >
                                { loading ?  <>
                                    <HourglassTopIcon />
                                    LOADING...
                                </> : "Save and close" }
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

export default TextareaForm