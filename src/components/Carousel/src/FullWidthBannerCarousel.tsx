import React, {useEffect, useState} from 'react';
import Carousel, {CarouselProps} from "@/components/Carousel/src/Carousel";
import {BannerFullWidthProps} from "@/components/Banner/src/BannerFullWidth";
import {BannerFullWidth} from "@/components/Banner";
import {Box} from "@mui/material";

export interface FullWidthBannerCarouselProps extends CarouselProps {
    items ?: BannerFullWidthProps[]
}

const FullWidthBannerCarousel = (
    carouselProps:FullWidthBannerCarouselProps
) => {
    const [isComponentRendered, setIsComponentRendered] = useState<boolean>(false)
    useEffect(() => {
        setIsComponentRendered(true)
    }, [])
    const {items} = carouselProps;
    const bannerFullWidthComponents = items ? items.map((BannerFullWidthProps, key) => <BannerFullWidth {...BannerFullWidthProps} key={key} />) : []
    const FirstBanner = !isComponentRendered && bannerFullWidthComponents.length >0 ? bannerFullWidthComponents[0] : null;
    return <Box data-component-name={'FullWidthBannerCarousel'}>
        { FirstBanner }
        <Carousel
            {...carouselProps}
            items={bannerFullWidthComponents}
        />
    </Box>
}

export default FullWidthBannerCarousel;