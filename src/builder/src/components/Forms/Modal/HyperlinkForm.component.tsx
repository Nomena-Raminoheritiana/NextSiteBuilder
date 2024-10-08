import React, {Suspense, useContext, useMemo, useRef, useState} from "react"
import {
    Backdrop,
    Box,
    Button,
    Fade,
    FormControlLabel,
    FormGroup,
    Modal,
    Switch,
    TextField,
    Typography
} from "@mui/material";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import getId from "@/builder/src/Utils/HTML/getId";
import saveModelProps from "@/builder/src/services/apiCall/model/saveModelProps";
import updateHyperlinkById from "@/builder/src/services/setData/updateHyperlinkById";
import getAllElementsById from "@/builder/src/Utils/HTML/getAllElementsById";
import MainModal from "@/builder/src/components/Forms/Modal/MainModal";
import PreviewButtonComponent from "@/builder/src/components/Forms/CustomButton/PreviewButton.component";

export interface HyperlinkFormProps {
    targetHtmlElement:HTMLElement;
    handleCloseContextMenu?:() => void;
}


const HyperlinkForm: React.FC<HyperlinkFormProps> = (props) => {
    const {
        targetHtmlElement,
        handleCloseContextMenu
    } = props
    const pagePropsValue = useContext(BuilderContext);
    const inputLabelRef = useRef<HTMLInputElement>();
    const inputUrlRef = useRef<HTMLInputElement>();
    const inputSwitchTargetRef = useRef<HTMLInputElement>();
    const inputSwitchDefaultValue = useMemo(() => {
        return targetHtmlElement?.getAttribute('target')=='_blank'
    }, [])
    const defaultInnerHTML = useMemo(() => targetHtmlElement ? targetHtmlElement?.innerHTML : "", []);
    const defaultUrl = useMemo(() => targetHtmlElement ? targetHtmlElement?.getAttribute('href') : "", []);
    const defaultTarget = useMemo(() => targetHtmlElement ? targetHtmlElement?.getAttribute('target') : "", []);

    const [openInNewTabState, setOpenInNewTabState] = useState<boolean>(inputSwitchDefaultValue)

    const handleSave = async (e) => {
        e.preventDefault();
        const copyOfpageProps = {...pagePropsValue?.pageProps};
        const modelId = pagePropsValue.modelId;
        const apiConfig = pagePropsValue.apiConfig
        const targetId = getId(targetHtmlElement);
        if(targetId) {
          const updated =  updateHyperlinkById(
                copyOfpageProps,
                targetId,
              {
                  label : inputLabelRef?.current?.value,
                  url : inputUrlRef?.current?.value,
                  openLinkInNewTab: openInNewTabState
              }
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
        if (targetHtmlElement) {
            getAllElementsById(targetHtmlElement?.id, (element) => {
                element.innerHTML = defaultInnerHTML;
                element.setAttribute('href', defaultUrl);
                element.setAttribute('target', defaultTarget)
            })
        }
        if (handleCloseContextMenu) {
            setTimeout(() => handleCloseContextMenu(), 1000);
        }
    }

    const handleChangeLabel = (e:React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        getAllElementsById(targetHtmlElement?.id, (element) => {
            element.textContent = (e.target as HTMLInputElement).value
        })
    }

    const handleChangeUrl = (e:React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        getAllElementsById(targetHtmlElement?.id, (element) => {
            element.setAttribute('href', (e.target as HTMLInputElement).value)
        })
    }

    const handleChangeOpenInNewTab = (e:React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        const switchElement = e.target as HTMLInputElement
        setOpenInNewTabState(switchElement.checked)
        getAllElementsById(targetHtmlElement?.id, (element) => {
            element.setAttribute('target', switchElement.checked ? '_blank' : '_self')
        })
    }

    return <>
        <MainModal
            handleMainButtonClick={handleSave}
            handleCancel={handleCancel}
            injectMoreButtons={() => <PreviewButtonComponent />}
        >
            <Typography variant={'h6'} sx={{mb:2, textAlign:'left'}}>
                Modify the Hyperlink
            </Typography>
            <FormGroup sx={{mt:3}}>
                <TextField onChange={handleChangeLabel} inputRef={inputLabelRef} defaultValue={targetHtmlElement?.textContent} fullWidth label="Change the label" />
                <TextField onChange={handleChangeUrl} sx={{mt:4}}  inputRef={inputUrlRef} defaultValue={targetHtmlElement?.getAttribute('href')} fullWidth label="Change the URL" />
                <FormControlLabel
                    sx={{mt:3}}
                    control={
                        <Switch
                            inputRef={inputSwitchTargetRef}
                            onChange={handleChangeOpenInNewTab}
                            defaultChecked={inputSwitchDefaultValue}
                        />
                    }
                    label="Open in a new tab" />

            </FormGroup>
        </MainModal>
    </>
}

export default HyperlinkForm