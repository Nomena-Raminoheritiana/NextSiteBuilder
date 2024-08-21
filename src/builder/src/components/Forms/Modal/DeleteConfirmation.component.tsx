import React, {Suspense, useContext, useRef, useState} from "react"
import {Backdrop, Box, Button, Fade, Modal, Typography} from "@mui/material";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import getId from "@/builder/src/Utils/HTML/getId";
import saveModelProps from "@/builder/src/services/apiCall/model/saveModelProps";
import deleteElementById from "@/builder/src/services/setData/deleteElementById";
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

const DeleteConfirmationComponent: React.FC<TextareaFormProps> = (props) => {
    const {
        targetHtmlElement,
        handleCloseContextMenu
    } = props

    const pagePropsValue = useContext(BuilderContext);

    const defaultTextContent = targetHtmlElement ? targetHtmlElement?.textContent : "";
    const handleSave = async (e) => {
        e.preventDefault();
        const copyOfpageProps = {...pagePropsValue?.pageProps};
        const modelId = pagePropsValue.modelId;
        const apiConfig = pagePropsValue.apiConfig
        const targetId = getId(targetHtmlElement);
        if(targetId) {
            console.log('ato')
            const deleted = deleteElementById(
                copyOfpageProps,
                targetId
            )
            if(deleted) {
               const saved = await saveModelProps(modelId, apiConfig, copyOfpageProps);
               saved && pagePropsValue?.setPageProps && pagePropsValue?.setPageProps(copyOfpageProps)
            }
        }
        handleCancel(e,true);
        targetHtmlElement.remove();
    }

    const handleCancel = (e, saveContent = false) => {
        !saveContent && targetHtmlElement && (targetHtmlElement.textContent = defaultTextContent)
        if (handleCloseContextMenu) {
            setTimeout(() => handleCloseContextMenu(), 1000);
        }
    }

    return <>
        <MainModal
            handleMainButtonClick={handleSave}
            handleCancel={handleCancel}
        >
            <Typography variant={'h6'} sx={{mb:2, textAlign:'left'}}>
                Are you sure to delete the element ?
            </Typography>
            <Typography paragraph={true} sx={{mb:2, textAlign:'left', fontSize:'15px'}}>
                This action is no longer reversible
            </Typography>
        </MainModal>
    </>
}

export default DeleteConfirmationComponent