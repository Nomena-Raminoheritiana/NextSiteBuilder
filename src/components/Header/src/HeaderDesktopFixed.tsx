import React from 'react';
import {HeaderDesktopFixedProps} from'./interfaces/Header.interface'
import "../styles/headerDesktopFixed.scss"
import {
    AppBar,
    Box,
    Button,
    Toolbar
} from "@mui/material";
import Logo from "@/components/Logo/src/Logo";

const HeaderDesktopFixed = ({
  navItems,
  sx = {},
  logoProps
}:HeaderDesktopFixedProps) => {

    return (
        <Box className="header-desktop-fixed" data-component-name={'HeaderDesktopFixed'}>
            <AppBar component="nav" className="header-desktop-fixed__appBar">
                <Toolbar className="header-desktop-fixed__toolBar">
                    <Logo className="header-desktop-fixed__logo" {...logoProps} />
                    <Box className="header-desktop-fixed__menu">
                        {navItems && navItems.map((nav, index) => (
                            <Button href={nav?.url} id={nav?.id} key={index} sx={{ color: '#fff' }}>
                                {nav?.label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default HeaderDesktopFixed;