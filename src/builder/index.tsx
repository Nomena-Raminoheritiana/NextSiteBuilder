'use client'

import dynamic from "next/dynamic";
import MainContextMenu from "@/builder/src/components/ContextMenu/MainContextMenu.component";
import React, {createContext, useEffect, useMemo, useState} from "react";
import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {Box} from "@mui/material";
import LoginForm from "@/builder/src/components/Forms/Modal/LoginForm.component";
import ValidateTokenFromLS from "@/builder/src/services/authentication/ValidateTokenFromLS";
import {setTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";

interface DataContextInterface {
    dataContext?: Record<string, any>;
    setDataContext?: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    apiConfig: ApiConfigInterface;
    pageId?: string | null;
    token?: string | null;
}

const defaultApiConfig: ApiConfigInterface = {
    domain: '',
    mainPageEndpoint: '',
    image: {
        uploadEndpoint: '',
        deleteEndpoint: ''
    },
    loginEndpoint : '',
    tokenVerificationEndpoint: ''
};

export const DataContext = createContext<DataContextInterface>({
    dataContext : {},
    setDataContext : () => {},
    apiConfig : defaultApiConfig,
    pageId: null,
    token: null
});

interface BuilderProps {
    manualStart ?: boolean;
    data ?: object;
    apiConfig : ApiConfigInterface,
    pageId?: number
}


const Builder:React.FC<BuilderProps> = (props) => {
    const {
        children,
        manualStart = false,
        data,
        apiConfig,
        pageId = null
    } = props

    const [dataContext, setDataContext] = useState(data)
    const [token, setToken] = useState<string>(null);
    const builderHoverElement = useMemo(() => import('./styles/_hoverElements.scss'), []);
    const HoverImageBorderMemo = useMemo(() => dynamic(() => import('./src/components/HoverElement/HoverImageBorder'), {ssr: false}), [])
    const MainContextMenuMemo = useMemo(() => <MainContextMenu />,[])
    const dataContextValue = {
        dataContext,
        setDataContext,
        apiConfig,
        pageId,
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
            <DataContext.Provider value={dataContextValue}>
                <Box className={"builder-container"}>
                    <HoverImageBorderMemo />
                    {MainContextMenuMemo}
                </Box>
                <Box className={"builder-children"}>
                    {children}
                </Box>
            </DataContext.Provider>
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