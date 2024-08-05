import React from 'react';
import ImageProps from "@/interfaces/image.interface";
import {Box} from "@mui/material";

const Image = (
    imageProps:ImageProps
) => {
    const { url, src, id }  = imageProps;
    const dynamiqueUrl = url !== undefined && (typeof url === 'string' ? url : ('src' in url ? url.src : null));
    return src || dynamiqueUrl ? <Box
        component="img"
        {...imageProps}
        src={(src || dynamiqueUrl)}
        data-component-name={'Image'}
        id={id}
    /> : <></>
}

export default Image;