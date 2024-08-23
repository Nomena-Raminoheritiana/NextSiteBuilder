import React from 'react';
import {Box, Typography} from "@mui/material";
import Image from "@/components/Image";
import "../styles/BannerFullWidth.scss"
import ImageProps from "@/interfaces/image.interface";

export interface BannerFullWidthProps {
    className ?: string;
    image ?: ImageProps;
    title ?: {
        text ?: string;
        id ?: string;
    };
    titleHeading ?: 'h1' | 'h2' |'h3' |'h4' | 'h5' | 'h6';
    paragraph ?: {
        text ?: string;
        id ?: string;
    };
}

const BannerFullWidth = (
    {
        className,
        image,
        titleHeading = 'h1',
        title,
        paragraph
    }:BannerFullWidthProps
) => {
    return <>
        <Box className={`bannerFullWidth ${className}`} data-component-name={'BannerFullWidth'}>
            <Box className="banner__image-container">
                <Image {...image} />
            </Box>
            <Box className="banner__contents-container">
                <Box className="banner__contents">
                    <Typography
                        className="banner__title"
                        id={title?.id}
                        variant={titleHeading}
                        dangerouslySetInnerHTML={{ __html: title?.text }}
                    />
                    <Typography
                        className="banner__paragraph"
                        id={paragraph?.id}
                        paragraph={true}
                        dangerouslySetInnerHTML={{ __html: paragraph?.text }}
                    />

                </Box>
            </Box>
        </Box>
    </>
}

export default BannerFullWidth;