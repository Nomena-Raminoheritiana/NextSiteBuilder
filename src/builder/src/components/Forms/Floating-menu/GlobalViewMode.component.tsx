import React from 'react'
import {Fab} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface ViewModeInterface {
    globalViewState:boolean;
    onClick?: (e:React.MouseEvent) => void
}

const GlobalViewModeComponent:React.FC<ViewModeInterface> = ({
                                                                 globalViewState,
    onClick
                                    }) => {
    const handleClick = (e) => {
        if(onClick && typeof  onClick === 'function') {
            onClick(e)
        }
    }
    return <>
        <Fab color="success" variant="extended" onClick={handleClick}>
            { !globalViewState ? <VisibilityIcon sx={{mr:1}} /> : <VisibilityOffIcon sx={{mr:1}} />}
            <span>{ !globalViewState ? 'Global view' : 'Normal view' }</span>
        </Fab>
    </>
}

export default GlobalViewModeComponent