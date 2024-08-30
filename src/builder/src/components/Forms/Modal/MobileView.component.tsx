import React, {useEffect, useId, useRef, useState} from 'react'
import MainModal from "@/builder/src/components/Forms/Modal/MainModal";
import styled from "styled-components";
import PreviewIcon from '@mui/icons-material/Preview';
import BuildIcon from '@mui/icons-material/Build';
import {Box, CircularProgress} from "@mui/material";

interface ThemeSelectorComponentInterface {
}

const MobileViewComponent: React.FC<ThemeSelectorComponentInterface> = () => {
    const [viewOnly, setViewOnly] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(true); // État pour gérer le chargement
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const iframeId = useId();

    const handleClick = () => {
        setViewOnly(!viewOnly);
    };

    const handleIframeLoad = () => {
        setLoading(false);
        console.clear()
    };

    useEffect(() => {
        if (iframeRef.current) {
            const iframe = iframeRef.current as HTMLIFrameElement;
            iframe.setAttribute('src', iframe.getAttribute('src'))
            setLoading(true);
        }
    }, [viewOnly]);

    return (
        <>
            <MainModal
                mainButtonLabel={viewOnly ?
                    <>
                        <BuildIcon /> <span style={{ marginLeft: '8px' }}>Builder mod</span>
                    </> :
                    <>
                        <PreviewIcon /> <span style={{ marginLeft: '8px' }}>View only</span>
                    </>
                }
                handleMainButtonClick={handleClick}
                mainButtonProps={{ display: true, closeAfterClick: false, verifyResponseAfterClick:false }}
                cancelButtonProps={{ refresh: true }}
            >
                <StyledWrapper>
                    {loading && (
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <CircularProgress />
                        </Box>
                    )}
                    <iframe
                        key={iframeId}
                        ref={iframeRef}
                        src={window.location.href}
                        width={375}
                        height={550}
                        sandbox={`allow-scripts ${!viewOnly ? 'allow-same-origin' : ''}`}
                        onLoad={handleIframeLoad}
                    />
                </StyledWrapper>
            </MainModal>
        </>
    );
};

const StyledWrapper = styled.div<{ className?: string }>`
`;


export default MobileViewComponent