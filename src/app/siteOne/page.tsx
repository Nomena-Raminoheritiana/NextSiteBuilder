import "./ui/page.scss"
import Header from "@/components/Header";
import {
    ProductIngredientCarousel,
    FullWidthBannerCarousel
} from "@/components/Carousel"
import MarqueeText from "@/components/Marquee";
import SectionHeader from "@/components/SectionHeader";
import {BannerWithTwoColumns} from "@/components/Banner";
import {Container, Divider} from "@mui/material";
import QuiltedImageList from "@/components/QuiltedImage";
import Testimonial from "@/components/Testimonial";
import useIsMobile from "@/Hooks/useIsMobile.hook";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Builder from "@/builder";
import defaultProps from "@/app/siteOne/lib/defaultProps/page.main.props"
import apiConfig from './config/apiConfig/api.config.json'
import fetchPageProps from "@/app/siteOne/lib/fetchData/fetchPageProps";


export default async function Page() {
   const pageId = 1;
   let data;
   try {
       const dataFromApi = await fetchPageProps(pageId);
       data = dataFromApi ? dataFromApi.props || defaultProps : defaultProps;
   } catch(e) {
       data = defaultProps
   }

  return (
      <Builder
          start={false}
          data={data}
          apiConfig={apiConfig}
          pageId={pageId}
      >
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
      </Builder>
  );
}
