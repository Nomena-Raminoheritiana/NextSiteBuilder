import React, {useEffect, useRef} from 'react'
import {Button, Fab} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import useIsMobile from "@/Hooks/useIsMobile.hook";

interface ViewModeInterface {
    globalViewState:boolean;
    onClick?: (e:React.MouseEvent) => void;
    onClickZoomIn?: (e:React.MouseEvent) => void;
    onClickZoomOut?: (e:React.MouseEvent) => void;
}

const GlobalViewModeComponent:React.FC<ViewModeInterface> = (props) => {
    const {globalViewState,onClickZoomOut,onClickZoomIn,onClick} = props;
    const zoomInRef = useRef()
    const zoomOutRef = useRef()
    const isMobile = useIsMobile()

    const handleClick = (e) => {
        if(onClick && typeof  onClick === 'function') {
            onClick(e)
            window.scrollTo({top: 0})
        }
    }
    const handleZoomIn = (e) => {
        if(onClickZoomIn && typeof  onClickZoomIn === 'function') {
            onClickZoomIn(e)
        }
    }

    const handleZoomOut = (e) => {
        if(onClickZoomOut && typeof  onClickZoomOut === 'function') {
            onClickZoomOut(e)
        }
    }

    return <>
        <Fab color="primary" variant="extended" onClick={handleClick}>
            { !globalViewState ? <VisibilityIcon /> : <VisibilityOffIcon />}
            {!isMobile && <span style={{marginLeft:'5px'}}>{ !globalViewState ? 'Global view' : 'Normal view' }</span>}
        </Fab>
        {
            globalViewState &&
            <>
                <Button
                    ref={zoomInRef}
                    onClick={handleZoomIn}
                    sx={{
                        position: 'fixed',
                        top: '45%',
                        right: '20%',
                        cursor: 'pointer',
                        zIndex: '9999'
                    }}
                >
                    <ZoomInIcon
                        color={'primary'}
                        sx={{
                            fontSize: '50px',
                            boxShadow: '0px 0px 0px 50px rgba(255,255,255,0.7) inset',
                            borderRadius: '5px'
                        }}
                    />
                </Button>

                <Button
                    ref={zoomOutRef}
                    onClick={handleZoomOut}
                    sx={{
                        position: 'fixed',
                        top: '45%',
                        left: '20%',
                        fontSize: '50px',
                        cursor: 'pointer',
                        zIndex: '9999'
                    }}
                >
                    <ZoomOutIcon
                        color={'primary'}
                        sx={{
                            fontSize: '50px',
                            boxShadow: '0px 0px 0px 50px rgba(255,255,255,0.7) inset',
                            borderRadius: '5px'
                        }}
                    />
                </Button>

            </>
        }
    </>
}

export default GlobalViewModeComponent