import React, {useContext} from "react"
import {Typography} from "@mui/material";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import getId from "@/builder/src/Utils/HTML/getId";
import saveModelProps from "@/builder/src/services/apiCall/model/saveModelProps";
import deleteElementById from "@/builder/src/services/setData/deleteElementById";
import MainModal from "@/builder/src/components/Forms/Modal/MainModal";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export interface TextareaFormProps {
    targetHtmlElement:HTMLElement;
    handleCloseContextMenu?:() => void;
}


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
            const deleted = deleteElementById(
                copyOfpageProps,
                targetId
            )
            if(deleted) {
                const saved = await saveModelProps(modelId, apiConfig, copyOfpageProps);
                saved && pagePropsValue?.setPageProps && pagePropsValue?.setPageProps(copyOfpageProps)
                targetHtmlElement.remove();
                return true;
            }
        }
      return false
    }

    const handleCancel = (e, saveContent = false) => {
        targetHtmlElement && (targetHtmlElement.textContent = defaultTextContent)
        if (handleCloseContextMenu) {
            setTimeout(() => handleCloseContextMenu(), 1000);
        }
    }

    return <>
        <MainModal
            handleMainButtonClick={handleSave}
            handleCancel={handleCancel}
            mainButtonLabel={<><DeleteForeverIcon sx={{mr:1}} /> Delete Element</>}
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