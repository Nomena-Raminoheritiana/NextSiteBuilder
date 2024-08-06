import React, {Suspense, useContext, useEffect, useRef, useState} from "react"
import {
    Backdrop,
    Box,
    Button,
    Fade,
    Grid,
    Modal,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography
} from "@mui/material";
import {DataContext} from "@/builder";
import getId from "@/builder/src/services/getId";
import styled from "styled-components";
import updateTextById from "@/builder/src/services/setData/updateTextById";
import saveData from "@/builder/src/services/saveData/saveData";
import updateImageUrlById from "@/builder/src/services/setData/updateImageUrlById";

export interface TextareaFormProps {
    targetHtmlElement:HTMLElement;
    handleCloseContextMenu?:() => void;
}

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex:9999
};

const ImageForm: React.FC<TextareaFormProps> = (props) => {
    const {
        targetHtmlElement,
        handleCloseContextMenu
    } = props

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
    const [defaultUrlImagePreview] = useState(targetHtmlElement?.getAttribute('src'));
    const [urlImagePreview, seturlImagePreview] = useState<string>(targetHtmlElement?.getAttribute('src'));
    const [toogleButtonActive,setToogleButtonActive] = useState<string>('fromUrl');
    const inputTitleRef = useRef();
    const inputAltRef = useRef();
    const dataContextValue = useContext(DataContext);

    useEffect(() => {
        targetHtmlElement?.setAttribute('src', urlImagePreview)
    }, [urlImagePreview])


    const defaultTextContent = targetHtmlElement ? targetHtmlElement?.textContent : "";
    const onSaveClick = async (e) => {
        e.preventDefault();
        const copyOfDataContext = {...dataContextValue?.dataContext};
        const pageId = dataContextValue?.pageId;
        const apiConfig = dataContextValue?.apiConfig
        const targetId = getId(targetHtmlElement);
        if(targetId) {
            const updated = updateImageUrlById(
                copyOfDataContext,
                targetId,
                {
                    url: urlImagePreview,
                    title: inputTitleRef?.current?.value,
                    alt: inputAltRef?.current?.value
                }
            )
            if(updated) {
                const saved = await saveData(pageId, apiConfig, copyOfDataContext);
                saved && dataContextValue?.setDataContext && dataContextValue?.setDataContext(copyOfDataContext)
            }
        }
        handleClose(true);
    }

    const onCancelClick = (e) => {
        e.preventDefault();
        handleClose();
    }

    const handleClose = (saveContent = false) => {
        setIsModalOpen(false);
        !saveContent && seturlImagePreview(defaultUrlImagePreview);
        if(!saveContent) targetHtmlElement.textContent = defaultTextContent
        if(handleCloseContextMenu) setTimeout(() => handleCloseContextMenu(), 1000)
    }

    const handleChangeToogleButton = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setToogleButtonActive(newAlignment);
        seturlImagePreview(defaultUrlImagePreview);
    };

    const handleChangeInputFromUrl = (
        event: React.MouseEvent<HTMLElement>,
    ) => {
        seturlImagePreview(event?.target?.value || defaultUrlImagePreview)
    }

    return <>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={isModalOpen}
            onClose={onCancelClick}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={isModalOpen}>
                <StyledWrapper className={'imageForm'}>
                    <Box sx={modalStyle}>
                        <Suspense fallback={'loading...'}>
                            <Typography variant={'h6'} sx={{mb:2}}>Modify image</Typography>
                            <Grid container spacing={2} sx={{width:{xs:'95vw', md:'80vw'}}}>
                                <Grid item xs={12} md={6}>
                                    <img src={urlImagePreview} className={'original-image'}  alt={'original image'}/>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <ToggleButtonGroup
                                        color="primary"
                                        value={toogleButtonActive}
                                        exclusive
                                        onChange={handleChangeToogleButton}
                                        aria-label="Platform"
                                    >
                                        <ToggleButton value="fromUrl">From URL</ToggleButton>
                                        <ToggleButton value="fromDevice">From device</ToggleButton>
                                    </ToggleButtonGroup>
                                    {
                                        toogleButtonActive === 'fromUrl' &&
                                        <Box mt={3}>
                                            <TextField onChange={handleChangeInputFromUrl} defaultValue={targetHtmlElement?.getAttribute('src')} fullWidth label="Put image url"  />
                                            <TextField sx={{mt:2}} ref={inputTitleRef} defaultValue={targetHtmlElement?.getAttribute('title')} fullWidth label="Enter the title of the image" />
                                            <TextField sx={{mt:2}} ref={inputAltRef} defaultValue={targetHtmlElement?.getAttribute('alt')} fullWidth label="Enter the alt of the image" />
                                        </Box>
                                    }

                                    <Box mt={3}>
                                        <Button onClick={onSaveClick}>Save and close</Button>
                                        <Button onClick={onCancelClick} sx={{color:'red'}}>Cancel</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Suspense>
                    </Box>
                </StyledWrapper>
            </Fade>
        </Modal>
    </>

}

const StyledWrapper = styled.div<{ className: string }>`
  img.original-image {
    width:100%;
    max-height:550px;
    object-fit: cover;
  }
  
`;

export default ImageForm