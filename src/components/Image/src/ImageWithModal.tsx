import React, {useState} from 'react';
import ImageProps from "@/interfaces/image.interface";
import {Box, Modal} from "@mui/material";
import Image from "./Image"

const ImageWithModal = (
    imageProps:ImageProps
) => {
    const [open, setOpen] = useState(false);
    const [currentImageUrl, setCurrentImageUrl] = useState(null);
    const handleOpen = (e) => {
        const img = e.target;
        setCurrentImageUrl(img?.src);
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    return <>
        <Image
            {...imageProps}
            sx={{...imageProps?.sx, cursor: 'pointer'}}
            onClick={handleOpen}
            data-component-name={'ImageWithModal'}
        />
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            className={'QuiltedImageList__modal'}
            sx={{display:'flex', alignItems: 'center'}}
        >
            <Box
                className={'QuiltedImageList__modal-container'}
                sx={{
                    marginLeft:'auto',
                    marginRight:'auto',
                    background: 'transparent'
                }}
            >
                <Image {...imageProps} url={currentImageUrl} alt={'image preview'} sx={{maxHeight: '80vh'}} />
            </Box>
        </Modal>
    </>
}

export default ImageWithModal;