'use client'

import dynamic from "next/dynamic";
import MainContextMenu from "@/builder/src/components/ContextMenu/MainContextMenu.component";
import React, {useEffect, useMemo, useState} from "react";
import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {Box} from "@mui/material";
import LoginForm from "@/builder/src/components/Forms/Modal/LoginForm.component";
import ValidateTokenFromLS from "@/builder/src/services/authentication/ValidateTokenFromLS";
import {setTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";
import BuilderContext, {BuilderContextInterface} from "@/builder/src/Contexts/Builder.context";


interface BuilderProps {
    manualStart ?: boolean;
    data ?: object;
    apiConfig : ApiConfigInterface,
    modelId?: number
}

const Builder:React.FC<BuilderProps> = (props) => {
    const {
        children,
        manualStart = false,
        data,
        apiConfig,
        modelId = null
    } = props

    const [dataContext, setDataContext] = useState(data)
    const [token, setToken] = useState<string>(null);
    const builderHoverElement = useMemo(() => import('./styles/_hoverElements.scss'), []);
    const HoverImageBorderMemo = useMemo(() => dynamic(() => import('./src/components/HoverElement/HoverImageBorder'), {ssr: false}), [])
    const MainContextMenuMemo = useMemo(() => <MainContextMenu />,[])
    const builderContextValue:BuilderContextInterface = {
        dataContext,
        setDataContext,
        apiConfig,
        modelId,
        token
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