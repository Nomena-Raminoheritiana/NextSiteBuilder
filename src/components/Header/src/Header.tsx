import React from 'react';
import '../styles/header.scss';
import {HeaderProps} from '@/components/Header'
import HeaderMobile from "@/components/Header/src/HeaderMobile";
import {Box, useMediaQuery, useTheme} from "@mui/material";
import HeaderDesktopFlex from "@/components/Header/src/HeaderDesktopFlex";

const headerDesktopFlexStyle = {
    display : {
        xs:'none',
        md:'block'
    }
}

const Header = ({
    className,
    sx,
    headerMobileProps,
    headerDesktopFlexProps
}: HeaderProps) => {
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return <>
        <div className={className} data-component-name={'Header'}>
            <Box component={'header'} sx={sx}>
                {mobileScreen ?
                    <HeaderMobile {...headerMobileProps}/> :
                    <>
                        <HeaderDesktopFlex {...headerDesktopFlexProps} sx={headerDesktopFlexStyle}/>
                    </>
                }
            </Box>
        </div>
    </>

};

export default Header;