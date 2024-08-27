import React, {ReactElement} from 'react'
import ThemeSelectorMenuComponent from "@/builder/src/components/Forms/Floating-menu/ThemeSelectorMenuComponent";
import LogoutMenuComponent from "@/builder/src/components/Forms/Floating-menu/LogoutMenuComponent";
import {Box} from "@mui/material";

interface MainFloatingMenuInterface {
    children?: ReactElement | HTMLElement | string
}

const MainFloatingMenuComponent:React.FC<MainFloatingMenuInterface> = ({children}) => {
    return  <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1200 , display:'flex', gap:2}}>
        <ThemeSelectorMenuComponent />
        {children}
        <LogoutMenuComponent />
    </Box>
}

export default MainFloatingMenuComponent