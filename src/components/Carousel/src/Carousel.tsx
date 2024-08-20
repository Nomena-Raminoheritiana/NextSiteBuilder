import React from 'react';
import {default as CarouselUi} from 'react-material-ui-carousel';
import {CarouselProps} from "@/components/Carousel/src/interfaces/Carousel.interface";
import {useMediaQuery, useTheme} from "@mui/material";
import '../styles/carousel.scss'
import sxProps from "@/interfaces/sx.interface";

export interface CarouselProps  extends sxProps {
    className ?: string;
    items ?: React.ReactNode[];
    indicators ?: boolean;
    swipe ?: boolean;
    fullHeightHover ?: boolean;
    slide ?: boolean;
    autoPlay ?: boolean;
    animation ?: 'fade' | 'slide';
    cycleNavigation ?: boolean;
    navButtonsAlwaysVisible ?: boolean;
    height ?: string | number;
    onChange ?: (now?: number, previous?: number) => any
}

const Carousel = (
    {
        sx,
        className,
        items,
        indicators = true,
        swipe = true,
        fullHeightHover = true,
        slide = true,
        autoPlay = true,
        animation = 'slide',
        cycleNavigation = true,
        navButtonsAlwaysVisible,
        height,
        onChange = () => {}
    }:CarouselProps
) => {
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return <>
        <CarouselUi
            data-component-name={'Carousel'}
            sx={sx}
            className={`carouselFullWidth ${className}`}
            onChange={onChange}
            height={height}
            fullHeightHover={fullHeightHover}
            swipe={swipe}
            slide={slide}
            autoPlay={autoPlay}
            indicators={indicators}
            animation={animation}
            duration={800}
            cycleNavigation={cycleNavigation}
            navButtonsAlwaysVisible={navButtonsAlwaysVisible ? navButtonsAlwaysVisible : !mobileScreen}
            navButtonsProps={{
                className: 'carousel--navButtons'
            }}
            navButtonsWrapperProps={{
                className: 'carousel--navButtons__container'
            }}
            indicatorContainerProps={{
                className: 'carousel--indicator__container'
            }}
            indicatorIconButtonProps={{
                className: 'carousel--indicator__button'
            }}
            activeIndicatorIconButtonProps={{
                className: 'carousel--indicator__button-active'
            }}
        >
            {items && items?.map((component, index) => (<div key={index}>{component}</div>))}
        </CarouselUi>
    </>
}

export default Carousel;