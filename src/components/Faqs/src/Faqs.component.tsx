'use client'

import React from 'react'
import {Box, Grid} from "@mui/material";
import sxProps from "@/interfaces/sx.interface";
import SectionHeader, {SectionHeaderProps} from "@/components/SectionHeader/src/SectionHeader";
import Accordion, {AccordionProps} from "@/components/Accordion";
import "./Faqs.style.scss"
import Image from "@/components/Image";
import ImageProps from "@/interfaces/image.interface";

export interface FaqsProps extends sxProps {
    className ?: string;
    sectionHeaderProps ?: SectionHeaderProps;
    accordionProps ?: AccordionProps;
    imageProps ?: ImageProps
}

const Faqs: React.FC<FaqsProps> = (props) => {
    const {
        className,
        sx,
        sectionHeaderProps,
        accordionProps,
        imageProps
    } = props;

    return <>
        <Box
            className={`Faqs--container ${className}`}
            sx={sx}
            data-component-name={'Faqs'}
        >
            <Grid container className={`Faqs--grid`}>
                { imageProps &&
                    <Grid item sm={12} md={6} className={`Faqs--gridItem__image`}>
                        <Image {...imageProps} />
                    </Grid>
                }
                <Grid item sm={12} md={imageProps ? 6 : 12} className={`Faqs--gridItem__contents`}>
                    <Box className={'Faqs--gridItem__contents-container'}>
                        <SectionHeader {...sectionHeaderProps} alignLeft={true} />
                        <Accordion {...accordionProps} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default Faqs