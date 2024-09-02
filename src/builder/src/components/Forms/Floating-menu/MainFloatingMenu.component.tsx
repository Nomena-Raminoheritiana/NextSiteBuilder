import React, {ReactElement} from 'react'
import ThemeSelectorMenuComponent from "@/builder/src/components/Forms/CustomButton/ThemeSelectorMenuComponent";
import LogoutMenuComponent from "@/builder/src/components/Forms/CustomButton/LogoutMenuComponent";
import {Box} from "@mui/material";
import MobileViewMenuComponent from "@/builder/src/components/Forms/CustomButton/MobileViewMenu.component";
import useIsMobile from "@/Hooks/useIsMobile.hook";

interface MainFloatingMenuInterface {
    children?: ReactElement | HTMLElement | string
}

const mainFloatingStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
    zIndex: 1200 ,
    display:'flex',
    gap:2,
    px:2,
    py:1,
    '&::before': {
        width:'100%',
        height:'100%',
        background: 'rgb(237,237,237,.5)',
        backdropFilter:'blur(5px)',
        position:'absolute',
        top:0,
        left:0,
        content:'""',
        borderRadius:'10px'
    }

}

const MainFloatingMenuComponent:React.FC<MainFloatingMenuInterface> = ({children}) => {
    const isMobile = useIsMobile()
    return  <Box sx={mainFloatingStyle}>
        <ThemeSelectorMenuComponent />
        {children}
        {!isMobile && <MobileViewMenuComponent />}
        <LogoutMenuComponent />
    </Box>
}

export default MainFloatingMenuComponent