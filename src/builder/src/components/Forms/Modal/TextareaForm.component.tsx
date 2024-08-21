import React, {Suspense, useContext, useRef, useState} from "react"
import {Backdrop, Box, Button, Fade, Modal, Typography} from "@mui/material";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import updateTextById from "@/builder/src/services/setData/updateTextById";
import getId from "@/builder/src/Utils/HTML/getId";
import saveModelProps from "@/builder/src/services/apiCall/model/saveModelProps";
import MainModal from "@/builder/src/components/Forms/Modal/MainModal";

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

    const textAreaRef = useRef(null);
    const pagePropsValue = useContext(BuilderContext);
    const defaultTextContent = targetHtmlElement ? targetHtmlElement?.textContent : "";

    const handleSave = async (e) => {
        e.preventDefault();
        const copyOfpageProps = {...pagePropsValue?.pageProps};
        const modelId = pagePropsValue.modelId;
        const apiConfig = pagePropsValue.apiConfig
        const targetId = getId(targetHtmlElement);
        if(targetId) {
           const updated = updateTextById(
                copyOfpageProps,
                targetId,
                textAreaRef.current.value
           )
            if(updated) {
              const saved = await saveModelProps(modelId, apiConfig, copyOfpageProps);
              saved && pagePropsValue?.setPageProps && pagePropsValue?.setPageProps(copyOfpageProps)
            }
        }
        handleCancel(e,true);
    }

    const handleCancel = (e, saveContent = false) => {
        if(!saveContent) targetHtmlElement.textContent = defaultTextContent
        if(handleCloseContextMenu) setTimeout(() => handleCloseContextMenu(), 1000)
    }

    return <>
        <MainModal
            handleMainButtonClick={handleSave}
            handleCancel={handleCancel}
        >
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
        </MainModal>
    </>
}

export default TextareaForm