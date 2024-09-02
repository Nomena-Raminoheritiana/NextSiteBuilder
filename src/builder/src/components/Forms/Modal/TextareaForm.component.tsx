import React, {Suspense, useContext, useMemo, useRef, useState} from "react"
import {Backdrop, Box, Button, Fade, Modal, Typography} from "@mui/material";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import updateTextById from "@/builder/src/services/setData/updateTextById";
import getId from "@/builder/src/Utils/HTML/getId";
import saveModelProps from "@/builder/src/services/apiCall/model/saveModelProps";
import MainModal from "@/builder/src/components/Forms/Modal/MainModal";
import BasicEditor from "@/builder/src/components/Forms/TextEditor/BasicEditor";
import PreviewButtonComponent from "@/builder/src/components/Forms/CustomButton/PreviewButton.component";

export interface TextareaFormProps {
    targetHtmlElement:HTMLElement;
    handleCloseContextMenu?:() => void;
}

const TextareaForm: React.FC<TextareaFormProps> = (props) => {
    const {
        targetHtmlElement,
        handleCloseContextMenu
    } = props

    const pagePropsValue = useContext(BuilderContext);
    const defaultTextContent = useMemo(() => targetHtmlElement ? targetHtmlElement?.innerHTML : "", []);

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
               targetHtmlElement.innerHTML
           )
            if(updated) {
              const saved = await saveModelProps(modelId, apiConfig, copyOfpageProps);
              saved && pagePropsValue?.setPageProps && pagePropsValue?.setPageProps(copyOfpageProps)
              return true;
            }
        }
      return false;
    }

    const handleCancel = (e) => {
        targetHtmlElement.innerHTML = defaultTextContent
        if(handleCloseContextMenu) setTimeout(() => handleCloseContextMenu(), 1000)
    }

    return <>
        <MainModal
            handleMainButtonClick={handleSave}
            handleCancel={handleCancel}
            injectMoreButtons={() => <PreviewButtonComponent />}
        >
            <Typography variant={'h6'} sx={{mb:2}}>Modify the content</Typography>
            <BasicEditor
                defaultValue={targetHtmlElement && targetHtmlElement?.innerHTML}
                handleTextChange={(value) => {targetHtmlElement.innerHTML = value}}
            />
        </MainModal>
    </>
}

export default TextareaForm