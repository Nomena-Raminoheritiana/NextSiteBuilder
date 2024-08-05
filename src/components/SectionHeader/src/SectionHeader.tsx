import React from 'react';
import {Box, Typography} from "@mui/material";
import '../styles/SectionHeader.scss'
import SmallTitle, {SmallTitleProps} from "@/components/SmallTitle";
import SectionTitle, {SectionTitleProps} from "@/components/SectionTitle";
import SectionParagraph, {SectionParagraphProps} from "@/components/SectionParagraph";
import sxProps from "@/interfaces/sx.interface";

export interface SectionHeaderProps extends sxProps {
    className ?: string;
    smallTitleContents ?: {
        text ?: React.ReactNode;
        id ?: string;
    };
    sectionTitleContents ?: {
        text ?: React.ReactNode;
        id ?: string;
    };
    sectionParagraphContents ?: {
        text ?: React.ReactNode;
        id ?: string;
    };
    smallTitleProps ?: SmallTitleProps;
    sectionTitleProps ?: SectionTitleProps;
    sectionParagraphProps ?: SectionParagraphProps;
    alignLeft ?: boolean;
}
const SectionHeader: React.FC<SectionHeaderProps> = ({
    sx,
    className,
    smallTitleContents,
    sectionTitleContents,
    sectionParagraphContents,
    smallTitleProps,
    sectionTitleProps,
    sectionParagraphProps,
    alignLeft = false
    }) => (
    <>
        <Box
            className={`SectionHeader priority ${alignLeft ? 'align-left' : ''} ${className}`}
            sx={sx}
            data-component-name={'SectionHeader'}
        >
            <SmallTitle {...smallTitleProps} className={'SectionHeader--smallTitle ' + smallTitleProps?.className} id={smallTitleContents?.id} >{smallTitleContents?.text}</SmallTitle>
            <SectionTitle {...sectionTitleProps} className={'SectionHeader--sectionTitle ' + sectionTitleProps?.className} id={sectionTitleContents?.id}>{sectionTitleContents?.text}</SectionTitle>
            <SectionParagraph {...sectionParagraphProps} className={'SectionHeader--sectionParagraph ' + sectionParagraphProps?.className} id={sectionParagraphContents?.id}>{sectionParagraphContents?.text}</SectionParagraph>
        </Box>
    </>
)

export default SectionHeader