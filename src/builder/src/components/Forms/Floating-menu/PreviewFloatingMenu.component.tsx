import React, {useContext, useState} from 'react'
import {createPortal} from "react-dom";
import GlobalViewModeComponent from "@/builder/src/components/Forms/CustomButton/GlobalViewMode.component";
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
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
    const {globalViewState, globalViewZoom, setGlobalViewState, setGlobalViewZoom} = useContext(BuilderContext);
    const handleCloseClick = (e:React.MouseEvent) => {
        if(handleClose) {
            handleClose(e)
        }
    }

    return <>
        {
            show && createPortal(
                <Box sx={restoreButtonContainerStyle}>
                    <Fab
                        color="primary"
                        variant="extended"
                        sx={restoreButtonStyle}
                        onClick={handleCloseClick}
                    >
                        <SettingsBackupRestoreIcon sx={{mr:isMobile?0:1}}/> {isMobile ? '' : 'Restore'}
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