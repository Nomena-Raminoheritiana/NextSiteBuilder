import React, {useRef, useState} from 'react'
import PreviewIcon from '@mui/icons-material/Preview';
import {Button} from "@mui/material";
import useIsMobile from "@/Hooks/useIsMobile.hook";
import PreviewFloatingMenuComponent from "@/builder/src/components/Forms/Floating-menu/PreviewFloatingMenu.component";

interface PreviewButtonInterface {

}

const HideModalStyle = {
  opacity: 0
}

const ShowModalStlye = {
    opacity: 1
}


const getModalInfos = (buttonRef): { backdrop: HTMLElement | null; modalContainer: HTMLElement | null }  => {
    const buttonElement = buttonRef?.current ? buttonRef?.current as HTMLElement : null;
    const modalSuperContainer = buttonElement && buttonElement.closest('[role="presentation"]');
    const backdrop = modalSuperContainer && modalSuperContainer.querySelector('[aria-hidden="true"]');
    const modalContainer = modalSuperContainer && modalSuperContainer.querySelector('.modal-container');
    return {
        backdrop: backdrop ? backdrop as HTMLElement : null,
        modalContainer: modalContainer ? modalContainer as HTMLElement : null
    }
}

const PreviewButtonComponent:React.FC<PreviewButtonInterface> = (props) => {
    const [isPreviewActive, setIsPreviewActive] = useState<boolean>(false)
    const isMobile = useIsMobile();
    const buttonRef = useRef();

    const handleClickPreview = (e:React.MouseEvent) => {
        setIsPreviewActive(true);
        const {backdrop, modalContainer} = getModalInfos(buttonRef)
        backdrop && Object.assign(backdrop.style, HideModalStyle);
        modalContainer && Object.assign(modalContainer.style, HideModalStyle);
    }

    const handleClickRestore = (e:React.MouseEvent) => {
        setIsPreviewActive(false);
        const {backdrop, modalContainer} = getModalInfos(buttonRef);
        backdrop && Object.assign(backdrop.style, ShowModalStlye);
        modalContainer && Object.assign(modalContainer.style, ShowModalStlye);
    }

    return <>
            <Button
                variant="contained"
                sx={{ml: 2}}
                ref={buttonRef}
                onClick={handleClickPreview}
            >
                 <PreviewIcon sx={{mr:isMobile?0:1}}/> {isMobile ? '' : 'Preview'}
            </Button>
            <PreviewFloatingMenuComponent show={isPreviewActive} handleClose={handleClickRestore} />
        </>
}

export default PreviewButtonComponent