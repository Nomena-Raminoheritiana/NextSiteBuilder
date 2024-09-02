import React, {useContext, useState} from 'react'
import {Fab} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from "@/builder/src/services/apiCall/authentication/Logout";
import {getTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import useIsMobile from "@/Hooks/useIsMobile.hook";

const fabStyle= {
    padding: {
        xs: 0,
        md: 2
    }
}

const LogoutMenuComponent:React.FC = () => {
    const {apiConfig} = useContext(BuilderContext);
    const isMobile = useIsMobile()
    const handleLogout = async (e:React.MouseEvent) => {
        const tokenFromLS = getTokenFromLS();
        await Logout(apiConfig,tokenFromLS);
        window.location.reload();
    }
    return <>
        <Fab sx={fabStyle} color="error" variant="extended" onClick={handleLogout}>
            <LogoutIcon />
            {!isMobile &&  <span style={{marginLeft:'5px'}}>LogOut</span>}
        </Fab>
    </>
}

export default LogoutMenuComponent