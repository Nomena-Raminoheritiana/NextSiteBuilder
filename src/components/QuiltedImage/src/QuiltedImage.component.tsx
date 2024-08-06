'use client'

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './QuiltedImage.style.scss'
import sxProps from "@/interfaces/sx.interface";
import {ImageWithModal} from "@/components/Image";
import {Box} from "@mui/material";

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
    };
}

export interface itemData {
    img : string,
    title: string,
    rows?: number,
    cols?: number,
    id : string
}

export interface QuiltedImageListProps extends sxProps {
    className?: string;
    rowHeight?:  number | string;
    itemData: itemData[]
}


const QuiltedImageList:React.FC<QuiltedImageListProps> = ({
    sx,
    className,
    rowHeight= 350,
    itemData
                          }) => {

    return (
        <Box data-component-name={'ImageCarouselMod1'}>
            <ImageList
                className={'QuiltedImageList '+className}
                sx={sx}
                variant="quilted"
                cols={4}
                rowHeight={rowHeight}
            >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <ImageWithModal
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                            className={'MuiImageListItem-img'}
                            id={item.id}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>

    );
}




export default QuiltedImageList;