'use client'
import React, {useState} from 'react';
import {HeaderMobileProps} from'./interfaces/Header.interface'
import "../styles/headerMobile.scss"
import {
    AppBar,
    Backdrop,
    Box, Button,
    Divider,
    IconButton,
    MenuItem,
    MenuList,
    Paper,
    Toolbar, Typography
} from "@mui/material";
import {MenuIcon} from "@storybook/icons";
import Logo from "@/components/Logo";

const HeaderMobile = ({
      navItems,
      sx = {},
      logoProps
}:HeaderMobileProps) => {
    const [isBackdropOpen, setIsBackdropOpen] = useState(false);
    const handleClose = () => {
        setIsBackdropOpen(false);
    };
    const handleOpen = () => {
        setIsBackdropOpen(true);
    };

    return <>
        <div
            className="header-mobile"
            data-component-name={'HeaderMobile'}
        >
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleOpen}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo {...logoProps} sx={{ml:'auto'}} />
                </Toolbar>
                <Backdrop
                    sx={{ color: '#fff', zIndex: 998 }}
                    open={isBackdropOpen}
                    onClick={handleClose}
                >
                </Backdrop>
                <Toolbar className={`left-toolbar ${isBackdropOpen ? 'isOpen' : 'isClosed'}`} sx={{height: '100vh', width:'50vw', background: '#1976d2', zIndex:999, position:'absolute', top:0, display: 'none'}}>
                    <Box sx={{ mt:4, display: 'flex', flexDirection:'column'}}>
                        <Logo {...logoProps} sx={{mx:'auto'}} />
                        {navItems && (
                            <Paper sx={{mt: 5, backgroundColor: '#2e68a1d4'}}>
                                <MenuList sx={{overflow: 'hidden'}}>
                                    {
                                        navItems.map((nav, index) => (
                                            <MenuItem sx={{flexDirection: 'column'}} key={index}>
                                                <Button href={nav?.url} id={nav?.id}  sx={{ width:'100%', overflow:'hidden', color: '#fff', px: 2 }}>
                                                    {nav?.label}
                                                </Button>
                                                { index < navItems?.length - 1 && <Divider sx={{width: '100%'}}></Divider>}
                                            </MenuItem>
                                        ))
                                    }

                                </MenuList>
                            </Paper>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    </>
}

export default HeaderMobile;