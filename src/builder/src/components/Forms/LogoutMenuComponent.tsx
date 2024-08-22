import React, {useContext, useState} from 'react'
import {Fab} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import Logout from "@/builder/src/services/apiCall/authentication/Logout";
import {getTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";
import BuilderContext from "@/builder/src/Contexts/Builder.context";

const LogoutMenuComponent:React.FC = () => {
    const {apiConfig} = useContext(BuilderContext);
    const handleLogout = async (e:React.MouseEvent) => {
        const tokenFromLS = getTokenFromLS();
        await Logout(apiConfig,tokenFromLS);
        window.location.reload();
    }
    return <>
        <Fab color="error" variant="extended" onClick={handleLogout}>
            <LogoutIcon sx={{mr:1}} />
            <span>Log Out</span>
        </Fab>
    </>
}

export default LogoutMenuComponent