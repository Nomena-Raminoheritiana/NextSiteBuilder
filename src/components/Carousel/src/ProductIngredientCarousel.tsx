import React from 'react';
import styled, { css } from 'styled-components';
import { Splide, SplideSlide,SplideTrack, Options } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import ProductIngredientCard, { ProductIngredientCardProps } from "@/components/product-ingredient/src/ProductIngredientCard";
import {Box} from "@mui/material";
import sxProps from "@/interfaces/sx.interface";

export interface ProductIngredientCarouselProps extends sxProps {
  className?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6,
  title?: string;
  items?: ProductIngredientCardProps[];
  visibleSlideDesktop?: number;
  visibleSlideMobile?: number;
}

export const arrowIcon = (
    <svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-i4bv87-MuiSvgIcon-root" focusable="false"
         aria-hidden="true" viewBox="0 0 24 24" data-testid="NavigateBeforeIcon">
      <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill={'#fff'}></path>
    </svg>
);

/**
 * ProductIngredientCarousel component
 * @param { string } className          Component class override
 * @param { number } headingLevel       heading level of component - optional
 * @param { string } title              title of component - optional
 * @param { ProductIngredientCardProps[] } items              items of component - optional
 * @param { number } visibleSlideDesktop              visibleSlideDesktop of component - optional
 * @param { number } visibleSlideMobile              visibleSlideMobile of component - optional
 * @param { string } analytics          analytics of component - optional
  *@returns react component
  */

const ProductIngredientCarousel: React.FunctionComponent<ProductIngredientCarouselProps> = ({
  className,
  sx,
  items,
  visibleSlideDesktop = 3,
  visibleSlideMobile = 1
}) => {

  const carouselDirection = 'ltr';

  const desktopOptionsCarrosel = {
    type: 'slide',
    rewind: false,
    perPage: visibleSlideDesktop,
    perMove: 1,
    focus: 0 as Options["focus"],
    pagination: true,
    omitEnd: true,
    direction: carouselDirection as Options["direction"],
    arrows: true,
    speed: 800,
    gap: 10
  };

  const mobileOptionsCarrosel = {
    type: 'slide',
    direction: carouselDirection as Options["direction"],
    pagination: true,
    rewind: false,
    perPage: visibleSlideMobile,
    perMove: 1,
    focus: 'center' as Options["focus"],
    autoWidth: true,
    gap: 16,
    arrows: false,
    speed: 800,
  };
  
  return (
      <Box sx={sx} data-component-name={'ProductIngredientCarousel'}>
        <StyledWrapper className={["product-ingredient-carousel", className].join(" ")} data-cy="product-ingredient-carousel" data-testid="product-ingredient-carousel">
          <div className="product-ingredient-carousel__wrapper">
            <div className="product-ingredient-carousel-content">
              <div className="carousel-mobile">
                <Splide
                    hasTrack={ false }
                    options={mobileOptionsCarrosel}>
                  <SplideTrack>
                    {Array.isArray(items) && items &&
                        items?.map((item, index) => (
                            <SplideSlide key={`splide_carousel_mob${index}`}>
                              <ProductIngredientCard {...item} />
                            </SplideSlide>
                        ))}
                  </SplideTrack>
                  <div className="splide__arrows">
                    <button
                        className={`splide__arrow splide__arrow--prev `}
                        type="button"

                    >
                      {arrowIcon}
                    </button>
                    <button
                        className={`splide__arrow splide__arrow--next `}
                        type="button"

                    >
                      {arrowIcon}
                    </button>
                    <span className="gc__shadow-right"/>
                  </div>
                </Splide>
              </div>
              <div className="carousel-desktop">
                <Splide
                    hasTrack={ false }
                    options={desktopOptionsCarrosel}>
                  <SplideTrack>
                    {Array.isArray(items) && items &&
                        items?.map((item, index) => (
                            <SplideSlide key={`splide_carousel_desk${index}`}>
                              <ProductIngredientCard {...item}  />
                            </SplideSlide>
                        ))}
                  </SplideTrack>
                  <div className="splide__arrows">
                    <button
                        className={`splide__arrow splide__arrow--prev `}
                        type="button"

                    >
                      {arrowIcon}
                    </button>
                    <button
                        className={`splide__arrow splide__arrow--next `}
                        type="button"

                    >
                      {arrowIcon}
                    </button>
                    <span className="gc__shadow-right"/>
                  </div>
                </Splide>
              </div>
            </div>
          </div>
        </StyledWrapper>
      </Box>
  );
};


export const commonStyles = css`
  &.product-ingredient-carousel {
    width: 100vw;
    @media (min-width: 992px) {
      display: flex;
      justify-content: center;
      align-content: center;
      width: auto;
    }
    .product-ingredient-carousel__wrapper {
      @media (min-width: 992px) {
        width: 992px;
      }
    }
    .product-ingredient-carousel-content {
      padding: 0px;
      .carousel-mobile {
        display: block;
      }
      .carousel-desktop {
        display: none;
      }
      @media (min-width: 992px) {
        padding: 0 20px;
        .carousel-mobile {
          display: none;
        }
        .carousel-desktop {
          display: block;
        }
      }
    }
    .splide__slide {
      display: flex;
      justify-content: center;
      margin-bottom: 24px;
    }
    .carousel-mobile {
      .splide__slide {
        &:first-child {
          padding-left: 20px;
        }
        &:last-child {
          padding-right: 20px;
          .product-ingredient-cursor-icon {
            right: 42px;
          }
        }
      }
    }
    .splide__arrow svg {
      width: 20px;
      height: 20px;
    }
    .splide__pagination {
      bottom:revert;
      margin-top: 15px;
      .splide__pagination__page {
        width: 10px;
        height: 10px;
        background-color:  var(--primary-color, #1976d2);
        border-radius: 50%;
        margin-right: 16px;
        padding: 0;
        outline: revert;
        transition: all 0.3s ease-in-out;
        span {
          outline: none;
        }
      }
      .is-active {
        background-color: var(--primary-color, #1976d2);
        border-radius: 56px;
        width: 51px;
        transform:none;
      }
    }

    .splide__arrow--prev {
      left: -52px;
    }
    .splide__arrow--next {
      right: -60px;
    }
    
    .splide__arrow--next, .splide__arrow--prev {
      width: 40px;
      height: 40px;
      border: solid 2px var(--primary-color, #1976d2);
      border-radius: 50%;
      background: var(--primary-color, #1976d2);
      transform: rotateY(180deg);
      padding: 8px;
      position: absolute;
      top: 50%;
      z-index: 2;
      opacity: 1;
      outline: revert;
      :hover,
      :focus {
        opacity:0.7;
        svg, g, path {
          fill: #ffffff;
        }
      }
    }
    .splide__arrow--prev:disabled,
    .splide__arrow--next:disabled {
      display: none;
    }
  }
`;

const StyledWrapper = styled.div<{ className: string }>`
  ${commonStyles}
`;

export default ProductIngredientCarousel;