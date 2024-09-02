import React, {useContext, useEffect, useRef, useState} from 'react'
import {createPortal} from "react-dom";
import GlobalViewModeComponent from "@/builder/src/components/Forms/CustomButton/GlobalViewMode.component";
import CancelIcon from '@mui/icons-material/Cancel';
import {Box, Fab} from "@mui/material";
import useIsMobile from "@/Hooks/useIsMobile.hook";
import BuilderContext from "@/builder/src/Contexts/Builder.context";

interface PreviewFloatingMenuInterface {
    handleClose?: (e:React.MouseEvent) => void;
    show?:boolean
}

const restoreButtonContainerStyle = {
    position:'fixed',
    top: 0,
    left:0,
    width: '100vw',
    height: '100vh',
    zIndex: 999999,
    background: 'rgb(237,237,237,.3)'
}

const restoreButtonStyle = {
    position: 'absolute',
    top: '50vh',
    right: '1vw',
    zIndex: 99999
}

const globalViewButtonStyle = {
    position: 'absolute',
    top: '42vh',
    right: '1vw',
    zIndex: 99999
}

const PreviewFloatingMenuComponent:React.FC<PreviewFloatingMenuInterface> = (props) => {
    const {handleClose, show=false} = props
    const isMobile = useIsMobile();
    const container = useRef();
    const {globalViewState, globalViewZoom, setGlobalViewState, setGlobalViewZoom} = useContext(BuilderContext);
    const handleCloseClick = (e:React.MouseEvent) => {
        if(handleClose) {
            handleClose(e)
        }
    }

    useEffect(() => {
        if (container.current) {
            const handleWheel = (event: WheelEvent) => {
                event.preventDefault();
                const scrollAmount = event.deltaY;
                window.scrollTo({top: (window.scrollY + scrollAmount), behavior:'instant'})
            };
            const containerElement = container.current as HTMLElement
            containerElement.addEventListener('wheel', handleWheel);
            return () => {
                containerElement.removeEventListener('wheel', handleWheel);
            };
        }
    }, [show])

    return <>
        {
            show && createPortal(
                <Box ref={container} sx={restoreButtonContainerStyle}>
                    <Fab
                        color="primary"
                        variant="extended"
                        sx={restoreButtonStyle}
                        onClick={handleCloseClick}
                    >
                        <CancelIcon sx={{mr:isMobile?0:1}}/> {isMobile ? '' : 'Close'}
                    </Fab>
                    <GlobalViewModeComponent
                        sx={globalViewButtonStyle}
                        globalViewState={globalViewState || false}
                        scaleMod={globalViewZoom}
                        onClick={() => setGlobalViewState(!globalViewState) }
                        onClickZoomIn={() => setGlobalViewZoom(Math.min(globalViewZoom + 0.1, 1))}
                        onClickZoomOut={() => setGlobalViewZoom(Math.max(globalViewZoom - 0.1, 0.1))}
                    />
                </Box>
                , document.body)
        }
    </>
}

export default PreviewFloatingMenuComponent