import React from 'react';
import '../styles/logo.scss';
import {LogoProps} from "@/components/Logo/src/interfaces/Logo.interface";
import {Box, Typography} from "@mui/material";
import Image from '@/components/Image'
/**
 * Primary UI component for user interaction
 */
const Logo = ({
    className,
    sx,
    textSx,
    imageSx,
    image,
    text
}: LogoProps) => {
  return (
    <Box
        className={`logo-container ${className}`}
        sx={{...sx, ...{display: 'flex', gap: 1}}}
        data-component-name={'Logo'}
    >
        <Image sx={imageSx || {}} {...image} className={'logo-image'} />
        <Typography id={text?.id} variant="h6" className={'logo-text'} sx={{...{my: 'auto', fontWeight:'bold', fontFamily:'Roboto'}, ...textSx}}>
            {text?.text}
        </Typography>
    </Box>
  );
};

export default Logo;