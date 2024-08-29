'use client'

import dynamic from "next/dynamic";
import MainContextMenu from "@/builder/src/components/ContextMenu/MainContextMenu.component";
import React, {ReactElement, useEffect, useMemo, useState} from "react";
import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {Box} from "@mui/material";
import LoginForm from "@/builder/src/components/Forms/Modal/LoginForm.component";
import ValidateTokenFromLS from "@/builder/src/services/authentication/ValidateTokenFromLS";
import {setTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";
import BuilderContext, {BuilderContextInterface} from "@/builder/src/Contexts/Builder.context";
import '@/builder/styles/_hoverElements.scss';
import AvailableThemesInterface from "@/builder/src/Interfaces/AvailableThemes.interface";
import MainFloatingMenuComponent from "@/builder/src/components/Forms/Floating-menu/MainFloatingMenu.component";
import GlobalViewModeComponent from "@/builder/src/components/Forms/Floating-menu/GlobalViewMode.component";
import styled from "styled-components";


interface BuilderProps {
    manualStart ?: boolean;
    data ?: Record<string, any> | null;
    apiConfig : ApiConfigInterface;
    modelId?: number;
    availableThemes ?: AvailableThemesInterface | null;
    themeNameUsed ?: string | null;
    children?: ReactElement
}

const Builder:React.FC<BuilderProps> = (props) => {
    const {
        children,
        manualStart = false,
        data,
        apiConfig,
        modelId = null,
        availableThemes = null,
        themeNameUsed = null
    } = props

    const [pageProps, setPageProps] = useState(data)
    const [themeUsed, setThemeUsed] = useState<string | null>(themeNameUsed)
    const [token, setToken] = useState<string | null>(null);
    const [globalView, setGlobalView] = useState<boolean>(false);
    const HoverImageBorderMemo = useMemo(() => dynamic(() => import('@/builder/src/components/HoverElement/HoverImageBorder'), {ssr: false}), [])
    const MainContextMenuMemo = useMemo(() => <MainContextMenu />,[])
    const builderContextValue:BuilderContextInterface = {
        pageProps,
        setPageProps,
        apiConfig,
        modelId,
        token,
        availableThemes,
        themeUsed,
        setThemeUsed
    }

    useEffect(() => {
        const validateToken = async () => {
            const validatedToken = await ValidateTokenFromLS(apiConfig);
            typeof validatedToken == "string" && setToken(validatedToken);
        };
        validateToken();
    }, [])

    if(token || manualStart) {
         return <>
            <BuilderContext.Provider value={builderContextValue}>
                <Box className={"builder-container"}>
                    <HoverImageBorderMemo />
                    <MainFloatingMenuComponent>
                        <GlobalViewModeComponent
                            globalViewState={globalView}
                            onClick={() => { setGlobalView(!globalView); window.scrollTo({top: 0}) }}
                        />
                    </MainFloatingMenuComponent>
                    {MainContextMenuMemo}
                </Box>
                <GlobalViewModeDisplay $globalView={globalView} >
                    <Box className={"builder-children"}>
                        {children}
                    </Box>
                </GlobalViewModeDisplay>
            </BuilderContext.Provider>
        </>
    }

    const onLoginSuccess = (token:string) => {
        setTokenFromLS(token);
        setToken(token);
    }

    return <>
        <LoginForm apiConfig={apiConfig} onLoginSuccess={onLoginSuccess} />
        {children}
    </>
}

const GlobalViewModeDisplay = styled.div<{ $globalView?: boolean }>`
  ${props =>
          props.$globalView &&
          `
    margin: 0 auto;
    border: 1px solid #ccc;
    transition: width 0.3s ease;
    transform: scale(0.3);
    transform-origin: top center;
  `}
`;

export default Builder;