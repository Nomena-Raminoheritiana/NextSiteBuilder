import React, {useState} from 'react';
import '../style/Testimonial.scss'
import {Box, Grid} from "@mui/material";
import {ImageCarouselMod1, ImageCarouselMod1Props} from "@/components/Carousel";
import SectionTitle from "@/components/SectionTitle";
import SectionParagraph from "@/components/SectionParagraph";
import SingleTestimonial, {SingleTestimonialProps} from "./SingleTestimonial";

export interface TestimonialDesktopProps {
    className?: string;
    imageCarouselMod1Props?: ImageCarouselMod1Props;
    title?: {
        text?: string;
        id ?: string;
    };
    paragraph?:{
        text?: string;
        id ?: string;
    }
    singleTestimonials?: SingleTestimonialProps[]
}



const Testimonial: React.FC<TestimonialDesktopProps> = (props) => {
    const {
        className,
        imageCarouselMod1Props,
        title,
        paragraph,
        singleTestimonials
    } = props;

    const [singleTestimonialIndex, setSingleTestimonialIndex] = useState<number>(0)

    const onImageCarouselMod1Change = (now: number, previous: number)  => {
       singleTestimonials &&
       singleTestimonials.length > 0 &&
       singleTestimonials[now] !== undefined ?
        setSingleTestimonialIndex(now) :
        setSingleTestimonialIndex(0);
    }
    return <>
        <Box
            className={'Testimonial '+ className}
            data-component-name={'testimonial'}
        >
            <Grid container className={'Testimonial--container-desktop'}>
                <Grid item sm={12} md={6} className={`Testimonial--contents`}>
                    <Box className={`Testimonial--contents_container`}>
                        <SectionTitle textHeading={'h3'} id={title?.id}>{title?.text}</SectionTitle>
                        <SectionParagraph id={paragraph?.id}>{paragraph?.text}</SectionParagraph>
                        {
                            singleTestimonials && singleTestimonials.length > 0 && <SingleTestimonial {...singleTestimonials[singleTestimonialIndex]}/>
                        }
                    </Box>
                </Grid>
                <Grid item sm={12} md={6} className={`Testimonial--imageCarousel`}>
                    <ImageCarouselMod1
                        {...imageCarouselMod1Props}
                        autoPlay={false}
                        onChange={onImageCarouselMod1Change}
                    />
                </Grid>
            </Grid>
            <Grid container className={'Testimonial--container-mobile'}>
                <Grid item xl={12} className={`Testimonial--contents`}>
                    <Box className={`Testimonial--contents_container`}>
                        <SectionTitle id={title?.id} textHeading={'h3'}>{title?.text}</SectionTitle>
                        <SectionParagraph id={paragraph?.id}>{paragraph?.text}</SectionParagraph>

                    </Box>
                </Grid>
                <Grid item xl={12} className={`Testimonial--imageCarousel`}>
                    <ImageCarouselMod1
                        {...imageCarouselMod1Props}
                        autoPlay={false}
                        onChange={onImageCarouselMod1Change}
                    />
                </Grid>
                {
                    singleTestimonials && singleTestimonials.length > 0 && (
                        <Grid item xl={12} className={`Testimonial--contents_singleTestimonial`}>
                            <SingleTestimonial {...singleTestimonials[singleTestimonialIndex]}/>
                        </Grid>
                    )
                }

            </Grid>
        </Box>

    </>
}

export default Testimonial;