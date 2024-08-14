import React, {Suspense, useContext, useRef, useState} from "react"
import {Backdrop, Box, Button, Fade, Modal, TextField, Typography} from "@mui/material";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import getId from "@/builder/src/services/getId";
import savePageProps from "@/builder/src/services/apiCall/page/savePageProps";
import updateHyperlinkById from "@/builder/src/services/setData/updateHyperlinkById";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import getAllElementById from "@/builder/src/Utils/HTML/getAllElementsById";

export interface HyperlinkFormProps {
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

const HyperlinkForm: React.FC<HyperlinkFormProps> = (props) => {
    const {
        targetHtmlElement,
        handleCloseContextMenu
    } = props

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const [loading, setLoading] =  useState<boolean>(false);
    const dataContextValue = useContext(BuilderContext);
    const inputLabelRef = useRef<HTMLInputElement>();
    const inputUrlRef = useRef<HTMLInputElement>();


    const defaultTextContent = targetHtmlElement ? targetHtmlElement?.textContent : "";
    const defaultUrl = targetHtmlElement ? targetHtmlElement?.getAttribute('href') : "";
    const onSaveClick = async (e) => {
        e.preventDefault();
        const copyOfDataContext = {...dataContextValue?.dataContext};
        const pageId = dataContextValue.pageId;
        const apiConfig = dataContextValue.apiConfig
        const targetId = getId(targetHtmlElement);
        if(targetId) {
          const updated =  updateHyperlinkById(
                copyOfDataContext,
                targetId,
              {
                  label : inputLabelRef?.current?.value,
                  url : inputUrlRef?.current?.value
              }
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
        if (!saveContent && targetHtmlElement) {
            getAllElementById(targetHtmlElement?.id, (element) => {
                element.textContent = defaultTextContent;
                element.setAttribute('href', defaultUrl);
            })
        }
        if (handleCloseContextMenu) {
            setTimeout(() => handleCloseContextMenu(), 1000);
        }
    }

    const onChangeLabel = (e:React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        getAllElementById(targetHtmlElement?.id, (element) => {
            element.textContent = (e.target as HTMLInputElement).value
        })
    }

    const onChangeUrl = (e:React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        getAllElementById(targetHtmlElement?.id, (element) => {
            element.setAttribute('href', (e.target as HTMLInputElement).value)
        })
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
                            Modify the properties of the link
                        </Typography>
                        <Box mt={3}>
                            <TextField onChange={onChangeLabel} inputRef={inputLabelRef} defaultValue={targetHtmlElement?.textContent} fullWidth label="Change the label" />
                            <TextField onChange={onChangeUrl} sx={{mt:4}}  inputRef={inputUrlRef} defaultValue={targetHtmlElement?.getAttribute('href')} fullWidth label="Change the URL" />
                        </Box>
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

export default HyperlinkForm