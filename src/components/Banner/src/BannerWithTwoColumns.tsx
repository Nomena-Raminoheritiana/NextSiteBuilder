import React from 'react'
import {Grid, Typography} from "@mui/material";
import ImageProps from "@/interfaces/image.interface";
import Image from "@/components/Image";
import '../styles/BannerWithTwoColumns.scss'
import {Box} from "@mui/system";
import SmallTitle, {SmallTitleProps} from "@/components/SmallTitle/src/SmallTitle";
import SectionTitle, {SectionTitleProps} from "@/components/SectionTitle/src/SectionTitle";
import SectionParagraph, {SectionParagraphProps} from "@/components/SectionParagraph/src/SectionParagraph";
import sxProps from "@/interfaces/sx.interface";

export interface BannerWithTwoColumnsProps extends sxProps {
    className ?: string;
    image ?: ImageProps;
    smallTitleContents ?: {
        text ?: React.ReactNode;
        id ?: string;
    };
    sectionTitleContents ?:  {
        text ?: React.ReactNode;
        id ?: string;
    };
    sectionParagraphContents ?: {
        text ?: React.ReactNode;
        id ?: string;
    };
    smallTitleProps ?: SmallTitleProps;
    sectionTitleProps ?: SectionTitleProps;
    sectionParagraphProps ?: SectionParagraphProps
    imageToLeft ?: boolean
}

const BannerWithTwoColumns = ({
    sx,
    className,
    image,
    smallTitleContents,
    sectionTitleContents,
    sectionParagraphContents,
    smallTitleProps,
    sectionTitleProps,
    sectionParagraphProps,
    imageToLeft = true
    }: BannerWithTwoColumnsProps) => {
    return <>
        <Box
            className={`BannerWithTwoColumns ${className} ${!imageToLeft ? 'BannerWithTwoColumns__img-right' : ''}`}
            sx={sx}
            data-component-name={'BannerWithTwoColumns'}
        >
            <Grid container direction={!imageToLeft ? 'row-reverse' : 'row'} className={`BannerWithTwoColumns--grid`}>
                <Grid item sm={12} md={6} className={`BannerWithTwoColumns--gridItem__image`}>
                    <Image {...image} />
                </Grid>
                <Grid item sm={12} md={6} className={`BannerWithTwoColumns--gridItem__contents`}>
                    <Box className={'BannerWithTwoColumns__contents-container'}>
                        { smallTitleContents && (
                            <SmallTitle
                                {...smallTitleProps}
                                className={'BannerWithTwoColumns__contents-smallTitle '+smallTitleProps?.className || ''}
                                id={smallTitleContents?.id || ''}
                            >
                                {smallTitleContents?.text}
                            </SmallTitle>
                        )}
                        { sectionTitleContents && (
                            <SectionTitle
                                {...sectionTitleProps}
                                className={'BannerWithTwoColumns__contents-title '+(sectionTitleProps?.className || '')}
                                id={sectionTitleContents?.id || ''}
                            >
                                {sectionTitleContents?.text}
                            </SectionTitle>
                        )}
                        {
                            sectionParagraphContents && (
                                <SectionParagraph
                                    {...sectionParagraphProps}
                                    className={'BannerWithTwoColumns__contents-paragraph '+(sectionParagraphProps?.className || '')}
                                    id={sectionParagraphContents?.id || ''}
                                >
                                    {sectionParagraphContents?.text}
                                </SectionParagraph>
                            )
                        }
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default BannerWithTwoColumns