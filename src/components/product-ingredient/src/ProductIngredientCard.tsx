import React from 'react';
import styled, { css } from 'styled-components';
import LazyPicture from "@/components/LazyPicture";
import InViewHoc from '@/components/InViewHoc';
import {Box, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import sxProps from "@/interfaces/sx.interface";
import ImageProps from "@/interfaces/image.interface";

export interface LinkProps {
  title?: string;
  url: string;
  openLink?: boolean;
  id?: string;
}


export interface ProductIngredientCardProps extends sxProps {
  className?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6,
  title?: {
    text ?: string;
    id ?: string;
  };
  listItems?: [
    {
      text?: string;
      id?: string
    }
  ];
  descriptions?:[
    {
      text?: string;
      id?: string
    }
  ];
  image?: ImageProps;
  link?: LinkProps;
  lazyLoad?: boolean;
}

const cursorIcon = (
  <svg role="img" aria-hidden={true} width="34" height="55" viewBox="0 0 34 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path fill="var(--white)" d="M22.7667 16.7417L23 17L23.8387 17.5852C24.4346 18.1114 25.0304 18.6454 25.6185 19.1793C27.9401 21.292 29.867 23.7915 32.413 25.6565C33.2333 25.9119 33.2642 28.2489 32.4749 28.6591C32.382 28.7364 32.2737 28.7674 32.1576 28.7287C28.033 28.868 23.9393 29.402 19.8146 29.4097C22.8095 34.4552 25.9513 39.3924 29.1551 44.3141C29.6813 45.1189 29.0699 48.0518 28.3735 46.9839C24.5971 41.1723 20.8671 35.3529 17.4002 29.3478H17.3925C16.2859 29.2859 16.3478 26.1905 17.3925 26.2524C21.1379 26.4691 24.8524 26.0899 28.5747 25.8268C25.34 22.9248 22.3219 19.5972 19.1414 16.7417C14.2971 12.3927 9.4837 8.01264 4.68581 3.61715C4.67807 3.69454 4.67033 3.77966 4.65485 3.86478C2.55771 14.8612 2.77439 25.9506 1.76064 37.0322C4.51556 34.1766 7.70384 31.8164 10.5361 29.0228C10.8689 28.6978 11.1397 28.8061 11.3332 29.1234C11.3642 29.1621 11.4029 29.2085 11.4338 29.2627C13.6161 32.9772 15.7442 36.5369 17.6865 40.4062C18.8164 42.6581 20.0623 44.8558 21.2231 47.0923C21.8731 48.3459 22.2987 50.1258 23.1886 51.2711C25.4019 49.8704 27.6538 48.5316 29.8361 47.0768C30.7337 46.4809 31.1206 49.4835 30.2462 50.0639C27.9633 51.5883 25.6031 52.9813 23.297 54.4516C23.0648 54.6064 22.8714 54.5212 22.7166 54.3123L22.7011 54.2968C21.6487 53.2444 21.3701 51.8515 20.7742 50.5359C19.7218 48.1989 18.3056 45.9779 17.1371 43.6873C15.1328 39.7484 12.997 36.0029 10.776 32.211C7.58776 35.2678 4.01256 37.8447 1.1493 41.2497C0.537953 41.9771 0.0968559 40.7621 0.0968559 39.702C0.011732 39.4311 -0.0192226 39.137 0.0117316 38.8352C1.33502 26.8792 0.893925 14.9232 3.16132 3.05224C3.24644 2.59567 3.38573 2.31708 3.5405 2.17004C3.35478 1.09439 3.81135 -0.561658 4.63164 0.18898C9.35988 4.5303 14.1113 8.85614 18.886 13.151C20.0081 14.1725 22.2832 16.1923 22.2832 16.1923L22.7667 16.7417Z"/>
    </g>
  </svg>
);

/**
 * ProductIngredientCard component
 * @param { string } className          Component class override
 * @param { number } headingLevel       heading level of component
 * @param { string } title              title of component - optional
 * @param { string } description        description text of component - optional
 * @param { ImageProps } image          image object of component - optional
 * @param { LinkProps } link            link object of component - optional
 * @param { boolean } lazyLoad          lazy load image - optional
 * @param { string } analytics          analytics label - optional
  *@returns react component
  */

const ProductIngredientCard: React.FunctionComponent<ProductIngredientCardProps> = ({
  className,
  headingLevel = 2,
  title,
  descriptions= [],
  image,
  link,
  listItems= [],
  lazyLoad = true,
  sx
}) => {

  const LazyWrapper = lazyLoad ? LazyPicture : (props: any) => <picture> {props.children} </picture>;

  const hasLink = !!link?.url;

  const cardClickable = () => {
    if (link?.openLink && link?.url) {
      window.open(link?.url as string, '_blank');
    } else if (link?.url) {
      window.open(link?.url as string, '_self');
    }
  };
  
  return (
    <Box
        sx={{...sx, width:'100%'}}
        data-component-name={'ProductIngredienCard'}
    >
      <StyledWrapper className={["product-ingredient-card", className, hasLink ? 'has-link' : '' ].join(" ")} data-cy="product-ingredient-card" data-testid="product-ingredient-card">
        <Box className="product-ingredient-card__wrapper" onClick={hasLink ? cardClickable : undefined}>
          <InViewHoc>
            {image?.url && (
                <div className="product-ingredient-card-image">
                  <LazyWrapper className="product-ingredient-card-image-wrapper">
                    <source srcSet={`${image?.url}?fm=webp`} type="image/webp" />
                    <img {...image} src={`${image?.url}`} id={image?.id} aria-hidden={true} />
                  </LazyWrapper>
                </div>
            )}
            {title && (
                <Box className="product-ingredient-card-heading">
                  <Typography
                      className={'product-ingredient-card-heading-title'}
                      variant={`h${headingLevel}`}
                      id={title?.id}
                  >
                    {title?.text}
                  </Typography>
                </Box>
            )}

            {   (listItems?.length > 0 || descriptions?.length > 0)  &&
                <Box className="product-ingredient-card-desc" >
                  {
                      descriptions?.length > 0  &&
                      descriptions?.map((description, key) => (
                          <Typography
                              key={'paragraph-'+key}
                              paragraph={true}
                              className={''}
                              id={description?.id}
                          >
                            {description?.text}
                          </Typography>
                      ))
                  }
                  <List>
                    {
                      listItems?.length > 0 &&
                      listItems?.map((item, key) => (
                          <ListItem key={'listItem-'+key}>
                            <ListItemIcon className={'product-ingredient-card_Icon-container'}>
                              <AcUnitIcon className={'product-ingredient-card_listIcon'} />
                            </ListItemIcon>
                            <ListItemText
                                primary={item?.text}
                                primaryTypographyProps={{
                                  id:item?.id
                                }}
                            />
                          </ListItem>
                      ))
                    }
                  </List>
                </Box>
            }
            {hasLink && (
                <Box className="product-ingredient-cursor-icon">
                  {cursorIcon}
                </Box>
            )}
          </InViewHoc>
        </Box>
      </StyledWrapper>
    </Box>
  );
};


export const commonStyles = css`
  &.product-ingredient-card {
    width: 300px;
    min-height: 480px;
    border-radius: 16px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
    .product-ingredient-card__wrapper {
      display: flex;
      flex-direction: column;
    }
    .product-ingredient-card-image {
      margin-bottom: 24px;
      .product-ingredient-card-image-wrapper {
        width: 100%;
        height: 200px;
        overflow: hidden;
        img {
          width: 100%;
          object-fit: cover;
          border-radius: 16px 16px 0 0;
        }
      }
    }
    .product-ingredient-card-heading {
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 16px;
      .product-ingredient-card-heading-title {
        font-size: 20px;
        color: #243E63;
        line-height: 1.6;
        font-weight: 700;
        margin-bottom: 0px;
      }
    }
    .product-ingredient-card-desc {
      font-size: calc(16px + 0px);
      color: #243E63;
      line-height: 1.6;
      font-weight: 400;
      margin-left: 20px;
      margin-right: 20px;
      p {
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0px;
        }
      }
      ul {
        margin: 0;
        list-style-type: disc;
        padding-bottom:24px;
        li {
          padding-left:0;
          padding-right:0
        }
      }
      .product-ingredient-card_listIcon {
        color: var(--primary-color, #1976d2)
      }
      .product-ingredient-card_Icon-container {
        min-width: 36px;
      }
    }
    &.has-link {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      background-color: var(--teal);
      box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.20);
      .product-ingredient-card__wrapper {
        justify-content: center;
        height: 100%;
      }
      .product-ingredient-card-desc {
        font-size: calc(20px + 0px);
        line-height: 1.4;
        font-weight: 400;
        text-align: center;
        color: var(--white);
        margin-left: 32px;
        margin-right: 32px;
      }
      .product-ingredient-cursor-icon {
        position: absolute;
        bottom: 20px;
        right: 22px;
      }
      
    }
  }
`;

const StyledWrapper = styled.div<{ className: string }>`
  ${commonStyles}
`;

export default ProductIngredientCard;