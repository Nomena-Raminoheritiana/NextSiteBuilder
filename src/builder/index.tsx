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
import ThemeSelectorMenuComponent from "@/builder/src/components/Forms/Floating-menu/ThemeSelectorMenuComponent";
import AvailableThemesInterface from "@/builder/src/Interfaces/AvailableThemes.interface";
import LogoutMenuComponent from "@/builder/src/components/Forms/Floating-menu/LogoutMenuComponent";
import MainFloatingMenuComponent from "@/builder/src/components/Forms/Floating-menu/MainFloatingMenu.component";


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
                    <MainFloatingMenuComponent />
                    {MainContextMenuMemo}
                </Box>
                <Box className={"builder-children"}>
                    {children}
                </Box>
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

export default Builder