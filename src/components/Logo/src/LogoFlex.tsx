import React from 'react';
import '../styles/logoFlex.scss';
import {LogoProps} from "@/components/Logo/src/interfaces/Logo.interface";
import {Box} from "@mui/material";
import Logo from "@/components/Logo/src/Logo";
/**
 * Primary UI component for user interaction
 */
const LogoFlex = (logoProps: LogoProps) => {
    return (
        <>
            <Box
                className={'logo-flex wave'}
                data-component-name={'LogoFlex'}
            >
                <Logo {...logoProps} textSx={{color: '#fff'}} />
            </Box>
        </>

    );
};

export default LogoFlex;