import React, { useState } from 'react';
import {Box, CircularProgress} from "@mui/material";

interface ImageWithLoaderProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    imgClassName?: string;
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({ src, alt, imgClassName, width, height }) => {
    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };

    return (
        <>
            {
                loading &&
                <Box  className={'image-loader-container'}>
                    <CircularProgress />
                </Box>
            }
            <img
                onLoad={handleImageLoad}
                className={`image-with-loader ${imgClassName}`}
                src={src}
                alt={`theme-${alt}`}
                style={{ display: loading ? 'none' : 'block' }}
            />
        </>
    );
};

export default ImageWithLoader;
