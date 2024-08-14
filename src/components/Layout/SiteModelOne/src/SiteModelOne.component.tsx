'use client'
import React from 'react'
import './SiteModelOne.style.scss'
import Header from "@/components/Header";
import {FullWidthBannerCarousel, ProductIngredientCarousel} from "@/components/Carousel";
import MarqueeText from "@/components/Marquee";
import SectionHeader from "@/components/SectionHeader";
import {BannerWithTwoColumns} from "@/components/Banner";
import QuiltedImageList from "@/components/QuiltedImage";
import Testimonial from "@/components/Testimonial";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import pageProps from "@/components/Layout/SiteModelOne/src/defaultProps/page.main.props";
import {Container, Divider} from "@mui/material";

const SiteModelOne: React.FC = (props:object = {}) => {
    const data = JSON.stringify(props) !== '{}' ? props : pageProps;
    return <>
        <main className={'main'}>
            <Header {...data?.HeaderProps} className={'main-header'} />
            <FullWidthBannerCarousel {...data?.carouselFullBannerProps} sx={{mt:{xs:5, md:0}}} />
            <MarqueeText {...data?.marqueeTextProps}/>
            <Container sx={{mt:{xs:'50px', md:'150px'}}}>
                <SectionHeader {...data?.sectionHeaderProps1}  />
                <BannerWithTwoColumns {...data?.bannerWithTwoColumnsProps1} sx={{mt: {xs:'40px',md:'80px'}}} />
                <BannerWithTwoColumns {...data?.bannerWithTwoColumnsProps2} sx={{mt: {xs:'0px',md:'80px'}}} />
            </Container>
            <Divider sx={{display:{md:'none'}}} variant={'middle'} />
            <Container sx={{mt:{xs:'50px', md:'150px'}}}>
                <SectionHeader {...data?.sectionHeaderProps2}  />
                <QuiltedImageList
                    {...data?.QuiltedImageProps}
                    sx={{ width: '100%', mt: {xs:'0px',md:'80px'} }}
                    // rowHeight={isMobile ? 150 : 350 }
                />
            </Container>
            <Container sx={{mt:{xs:'50px', md:'150px'}}}>
                <Testimonial {...data?.testimonialProps} />
            </Container>
            <Container sx={{mt:{xs:'50px', md:'150px'}}}>
                <SectionHeader {...data?.sectionHeaderProps3}  />
                <ProductIngredientCarousel {...data?.productIngredientCarouselProps} sx={{mt: {xs:'40px',md:'80px'}}} />
            </Container>
            <Container sx={{mt:{xs:'50px', md:'150px'}}}>
                <Faqs {...data?.faqsProps} />
            </Container>
            <Footer {...data?.footerProps} sx={{mt:{xs:'50px', md:'150px'}}} />
        </main>
    </>
}

export default SiteModelOne