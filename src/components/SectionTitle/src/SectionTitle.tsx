import React from 'react';
import {Typography} from "@mui/material";
import '../styles/SectionTitle.scss'

export interface SectionTitleProps {
    className ?: string;
    textHeading ?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    id ?: string | undefined
}
const SectionTitle: React.FC<SectionTitleProps> = ({
    className,
    textHeading = 'h2',
    id,
    children
    }) => (
    <Typography
        variant={textHeading}
        className={'SectionTitle priority ' + className}
        data-component-name={'SectionTitle'}
        id={id}
    >
        {children}
    </Typography>
)

export default SectionTitle