import React from 'react';
import {Typography} from "@mui/material";
import '../styles/SmallTitle.scss'

export interface SmallTitleProps {
    className ?: string;
    textHeading ?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    id ?: string | undefined;
}
const SmallTitle: React.FC<SmallTitleProps> = ({
    className,
    textHeading = 'h5',
    id,
    children
    }) => (
    <Typography
        variant={textHeading}
        className={`SmallTitle priority ${className}`}
        data-component-name={'SmallTitle'}
        id={id}
    >
        {children}
    </Typography>
)

export default SmallTitle