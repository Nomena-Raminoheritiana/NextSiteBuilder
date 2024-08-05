import React from 'react';
import {Typography} from "@mui/material";
import '../styles/SectionParagraph.scss'

export interface SectionParagraphProps {
    className ?: string;
    id ?: string | undefined;
}
const SectionParagraph: React.FC<SectionParagraphProps> = ({
    className,
    id,
    children
    }) => (
    <Typography
        paragraph={true}
        className={'SectionParagraph priority ' + className}
        data-component-name={'SectionParagraph'}
        id={id}
    >
        {children}
    </Typography>
)

export default SectionParagraph