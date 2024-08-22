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
import BuilderContext from "@/builder/src/Contexts/Builder.context";
import getId from "@/builder/src/Utils/HTML/getId";
import styled from "styled-components";
import saveModelProps from "@/builder/src/services/apiCall/model/saveModelProps";
import updateImageUrlById from "@/builder/src/services/setData/updateImageUrlById";
import getLocalImageUrl from "@/builder/src/Utils/Image/getLocalImageUrl";
import uploadImage from "@/builder/src/services/apiCall/image/UploadImage";
import deleteImage from "@/builder/src/services/apiCall/image/DeleteImage";
import MainModal from "@/builder/src/components/Forms/Modal/MainModal";

export interface ImageFormProps {
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

const ImageForm: React.FC<ImageFormProps> = (props) => {
    const {
        targetHtmlElement,
        handleCloseContextMenu
    } = props

    const [defaultUrlImagePreview] = useState(targetHtmlElement?.getAttribute('src'));
    const [image, setImage] = useState<FileResult>({
        url: targetHtmlElement?.getAttribute('src'),
        name: null,
        file: null
    });
    const [toogleButtonActive,setToogleButtonActive] = useState<ToogleButtonAlignment>("fromUrl");
    const inputTitleRef = useRef();
    const inputAltRef = useRef();
    const inputFileRef = useRef();
    const pagePropsValue = useContext(BuilderContext);

    useEffect(() => {
        image?.url && targetHtmlElement?.setAttribute('src', image.url);
    }, [image])


    const defaultTextContent = targetHtmlElement ? targetHtmlElement?.textContent : "";
    const handleSave = async (e) => {
        e.preventDefault();
        const copyOfpageProps = {...pagePropsValue?.pageProps};
        const modelId = pagePropsValue?.modelId;
        const apiConfig = pagePropsValue.apiConfig
        const targetId = getId(targetHtmlElement);
        const imagePayload = {
            url: image?.url,
            title: (inputTitleRef?.current as HTMLInputElement)?.value,
            alt: (inputAltRef?.current as HTMLInputElement)?.value
        }
        await deleteImage(apiConfig, modelId, targetHtmlElement?.id);
        if(toogleButtonActive === 'fromDevice') {
            if(image?.file && image?.name) {
                const response =  await uploadImage(apiConfig, image.file, modelId, targetHtmlElement?.id );
                if(response) {
                  imagePayload.url = response.url;
                }
            }
        }
        if(targetId) {
            const updated = updateImageUrlById(
                copyOfpageProps,
                targetId,
                imagePayload
            )
            if(updated) {
                const saved = await saveModelProps(modelId, apiConfig, copyOfpageProps);
                saved && pagePropsValue?.setPageProps && pagePropsValue?.setPageProps(copyOfpageProps)
                return true
            }
        }
       return false
    }

    const handleCancel = (e) => {
        setImage({
            ...image,
            url: defaultUrlImagePreview
        });
        targetHtmlElement.textContent = defaultTextContent
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

    const handleAltChange = (
        event: React.MouseEvent<HTMLInputElement>
    ) => {
        const alt = (event?.target as HTMLInputElement).value;
        alt && targetHtmlElement?.setAttribute('alt', alt);
    }

    const handleTitleChange = (
        event: React.MouseEvent<HTMLInputElement>
    ) => {
        const title = (event?.target as HTMLInputElement).value;
        title && targetHtmlElement?.setAttribute('title', title);
    }


    return <>
        <MainModal
            handleMainButtonClick={handleSave}
            handleCancel={handleCancel}
        >
            <StyledWrapper>
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
                                    value={image.name || ''}
                                    sx={{
                                        mt:2
                                    }}
                                />
                            </Box>
                        }
                        <Box sx={{mt:2}}>
                            <TextField sx={{mt:2}} onChange={handleTitleChange} inputRef={inputTitleRef} defaultValue={targetHtmlElement?.getAttribute('title')} fullWidth label="Enter the title of the image" />
                            <TextField sx={{mt:4}} onChange={handleAltChange} inputRef={inputAltRef} defaultValue={targetHtmlElement?.getAttribute('alt')} fullWidth label="Enter the alt of the image" />
                        </Box>
                    </Grid>
                </Grid>
            </StyledWrapper>
        </MainModal>
    </>
}

const StyledWrapper = styled.div<{ className: string }>`
  img.original-image {
    width:100%;
    max-height:550px;
    object-fit: cover;
    box-shadow: 0 0 55px 555px #7C8BA1 inset;
    border-radius: 5px
  }
  
`;

export default ImageForm