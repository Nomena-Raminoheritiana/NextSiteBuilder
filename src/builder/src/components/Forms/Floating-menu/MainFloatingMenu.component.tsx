import React, {ReactElement} from 'react'
import ThemeSelectorMenuComponent from "@/builder/src/components/Forms/Floating-menu/ThemeSelectorMenuComponent";
import LogoutMenuComponent from "@/builder/src/components/Forms/Floating-menu/LogoutMenuComponent";
import {Box} from "@mui/material";
import MobileViewMenuComponent from "@/builder/src/components/Forms/Floating-menu/MobileViewMenu.component";
import useIsMobile from "@/Hooks/useIsMobile.hook";

interface MainFloatingMenuInterface {
    children?: ReactElement | HTMLElement | string
}

const MainFloatingMenuComponent:React.FC<MainFloatingMenuInterface> = ({children}) => {
    const isMobile = useIsMobile()
    return  <Box sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1200 , display:'flex', gap:2}}>
        <ThemeSelectorMenuComponent />
        {children}
        {!isMobile && <MobileViewMenuComponent />}
        <LogoutMenuComponent />
    </Box>
}

export default MainFloatingMenuComponent