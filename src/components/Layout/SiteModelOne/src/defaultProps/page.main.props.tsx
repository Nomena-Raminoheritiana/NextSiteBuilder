import {
    bannerWithTwoColumnsProps1,
    bannerWithTwoColumnsProps2,
    carouselFullBannerProps, faqsProps, footerProps,
    HeaderProps,
    marqueeTextProps, productIngredientCarouselProps, QuiltedImageProps,
    sectionHeaderProps1, sectionHeaderProps2, sectionHeaderProps3, testimonialProps
} from "@/components/Layout/SiteModelOne/src/defaultProps/page.partial.props";

const pageProps = {
    HeaderProps: {...HeaderProps},
    carouselFullBannerProps: {...carouselFullBannerProps},
    marqueeTextProps: {...marqueeTextProps},
    sectionHeaderProps1: {...sectionHeaderProps1},
    bannerWithTwoColumnsProps1: {...bannerWithTwoColumnsProps1},
    bannerWithTwoColumnsProps2: {...bannerWithTwoColumnsProps2},
    sectionHeaderProps2: {...sectionHeaderProps2},
    QuiltedImageProps: {...QuiltedImageProps},
    testimonialProps: {...testimonialProps},
    sectionHeaderProps3: {...sectionHeaderProps3},
    productIngredientCarouselProps: {...productIngredientCarouselProps},
    faqsProps: {...faqsProps},
    footerProps: {...footerProps}
}

export default pageProps;