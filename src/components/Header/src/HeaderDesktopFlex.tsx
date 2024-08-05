import React from 'react';
import {HeaderDesktopFlexProps} from'./interfaces/Header.interface'
import "../styles/headerDesktopFlex.scss"
import {
    AppBar,
    Box,
    Button,
    Toolbar
} from "@mui/material";
import Logo from "@/components/Logo/src/Logo";
import {LogoFlex} from "@/components/Logo";

const HeaderDesktopFlex = ({
                           navItems,
                           sx = {},
                           logoProps,
                       }:HeaderDesktopFlexProps) => {
  return <>
      <Box
          className="header-desktop-flex"
          sx={sx}
          data-component-name={'HeaderDesktopFlex'}
      >
          <AppBar component="nav" className="header-desktop-flex__appBar">
              <Toolbar  className="header-desktop-flex__toolBar">
                  <LogoFlex {...logoProps} />
                  <Box className="header-desktop-flex__menu">
                      {navItems && navItems.map((nav, index) => (
                          <Button href={nav?.url} key={index} id={nav?.id}>
                              {nav?.label}
                          </Button>
                      ))}
                  </Box>
              </Toolbar>
          </AppBar>
      </Box>
  </>
}

export default HeaderDesktopFlex;