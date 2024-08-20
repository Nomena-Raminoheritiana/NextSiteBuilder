import React from 'react';
import '../styles/ImageCarouselMod1.scss'
import Carousel, {CarouselProps} from "@/components/Carousel/src/Carousel";
import ImageProps from "@/interfaces/image.interface";
import Image from "@/components/Image";
import {Box} from "@mui/material";

export interface ImageCarouselMod1Props extends CarouselProps {
    items: ImageProps[]
}

const ImageCarouselMod1: React.FC<ImageCarouselMod1Props>  = (carouselProps) => {
    const {items, className} = carouselProps;
    const images = items && items.map((imageProps, index) => (
      <Image {...imageProps} key={index} className={`ìmageCarouselMod1--img priority ${imageProps?.className || ''}`} />
    ))
    return <Box data-component-name={'ImageCarouselMod1'}>
        <Carousel
            {...carouselProps}
            items={images}
            className={`ìmageCarouselMod1--container priority ${className || ''}`}
            animation={'fade'}
            indicators={false}
            slide={false}
            navButtonsAlwaysVisible={true}
        >
        </Carousel>
    </Box>
}

export default ImageCarouselMod1