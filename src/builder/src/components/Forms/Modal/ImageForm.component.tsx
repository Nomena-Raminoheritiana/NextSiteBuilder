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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import {DataContext} from "@/builder";
import getId from "@/builder/src/services/getId";
import styled from "styled-components";
import saveData from "@/builder/src/services/saveData/saveData";
import updateImageUrlById from "@/builder/src/services/setData/updateImageUrlById";
import getLocalImageUrl from "@/builder/src/Utils/getLocalImageUrl";
import uploadImage from "@/builder/src/services/upload/UploadImage";

export interface TextareaFormProps {
    targetHtmlElement:HTMLElement;
    handleCloseContextMenu?:() => void;
}

export type ToogleButtonAlignment = 'fromUrl'|'fromDevice';

interface FileResult {
    url?: string | null;
    name?: string | null;
    file?: File | null
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

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const ImageForm: React.FC<TextareaFormProps> = (props) => {
    const {
        targetHtmlElement,
        handleCloseContextMenu
    } = props

    const [isModalOpen, setIsModalOpen] = useState<boolean>(true)
    const [defaultUrlImagePreview] = useState(targetHtmlElement?.getAttribute('src'));
    const [image, setImage] = useState<FileResult>({
        url: targetHtmlElement?.getAttribute('src'),
        name: null,
        file: null
    });
    const [toogleButtonActive,setToogleButtonActive] = useState<ToogleButtonAlignment>("fromUrl");
    const [loading, setLoading] =  useState<boolean>(false);
    const inputTitleRef = useRef();
    const inputAltRef = useRef();
    const inputFileRef = useRef();
    const dataContextValue = useContext(DataContext);

    useEffect(() => {
        image?.url && targetHtmlElement?.setAttribute('src', image.url);
    }, [image])


    const defaultTextContent = targetHtmlElement ? targetHtmlElement?.textContent : "";
    const onSaveClick = async (e) => {
        e.preventDefault();
        const copyOfDataContext = {...dataContextValue?.dataContext};
        const pageId = dataContextValue?.pageId;
        const apiConfig = dataContextValue?.apiConfig
        const targetId = getId(targetHtmlElement);
        const imagePayload = {
            url: image?.url,
            title: (inputTitleRef?.current as HTMLInputElement)?.value,
            alt: (inputTitleRef?.current as HTMLInputElement)?.value
        }
        if(toogleButtonActive === 'fromDevice') {
            if(image?.file && image?.name) {
                setLoading(true);
                const response =  await uploadImage(apiConfig, image.file, pageId, targetHtmlElement?.id );
                if(response) {
                  imagePayload.url = response.url;
                }
                setLoading(false);
            }
        }
        if(targetId) {
            const updated = updateImageUrlById(
                copyOfDataContext,
                targetId,
                imagePayload
            )
            if(updated) {
                setLoading(true);
                const saved = await saveData(pageId, apiConfig, copyOfDataContext);
                setLoading(false);
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
        !saveContent && setImage({
            ...image,
            url: defaultUrlImagePreview
        });
        if(!saveContent) targetHtmlElement.textContent = defaultTextContent
        if(handleCloseContextMenu) setTimeout(() => handleCloseContextMenu(), 1000)
    }

    const handleChangeToogleButton = (
        event: React.MouseEvent<HTMLInputElement>,
        newAlignment: ToogleButtonAlignment,
    ) => {
        setToogleButtonActive(newAlignment);
        setImage({
            ...image,
            url: defaultUrlImagePreview,
            name: null,
            file: null
        });
    };

    const handleChangeInputFromUrl = (
        event: React.MouseEvent<HTMLInputElement>,
    ) => {
        const inputElement = event?.target as HTMLInputElement
        setImage({
            ...image,
            url: inputElement?.value as string || defaultUrlImagePreview
        });
    }

    const handleFileChange = async (
        event: React.MouseEvent<HTMLInputElement>,
    ) => {
        const imageInfo = await getLocalImageUrl(event?.target as HTMLInputElement);
        if(typeof imageInfo == 'object'){
            setImage({
                ...image,
                url: imageInfo.url as string,
                name: imageInfo?.name,
                file: imageInfo?.file
            });
        }
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
                                    {
                                        image?.url &&
                                        <img src={image?.url} className={'original-image'} alt={'original image'}/>
                                    }
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
                                            <TextField onChange={handleChangeInputFromUrl} defaultValue={image?.url} fullWidth label="Put image url"  />
                                        </Box>
                                    }

                                    {
                                        toogleButtonActive === 'fromDevice' &&
                                        <Box mt={3}>
                                            <Button
                                                component="label"
                                                role={undefined}
                                                variant="contained"
                                                tabIndex={-1}
                                                startIcon={<CloudUploadIcon />}
                                                sx={{
                                                    backgroundColor: "#28a745"
                                                }}
                                            >
                                                Upload file
                                                <VisuallyHiddenInput
                                                    type="file"
                                                    onChange={handleFileChange}
                                                    ref={inputFileRef}
                                                />
                                            </Button>
                                            <TextField
                                                fullWidth disabled
                                                value={image.name}
                                                sx={{
                                                    mt:2
                                                }}
                                            />
                                        </Box>
                                    }
                                    <Box sx={{mt:2}}>
                                        <TextField sx={{mt:2}} ref={inputTitleRef} defaultValue={targetHtmlElement?.getAttribute('title')} fullWidth label="Enter the title of the image" />
                                        <TextField sx={{mt:4}} ref={inputAltRef} defaultValue={targetHtmlElement?.getAttribute('alt')} fullWidth label="Enter the alt of the image" />
                                    </Box>

                                    <Box mt={3}>
                                        <Button
                                            onClick={onSaveClick}
                                            variant="contained"
                                        >
                                            { loading ?  <>
                                                <HourglassTopIcon />
                                                LOADING...
                                            </> : "Save and close" }
                                        </Button>
                                        <Button
                                            onClick={onCancelClick}
                                            variant="contained"
                                            sx={{
                                                backgroundColor:"#dc3545",
                                                ml: 2
                                        }}
                                        >
                                            Cancel
                                        </Button>
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