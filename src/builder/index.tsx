'use client'

import dynamic from "next/dynamic";
import MainContextMenu from "@/builder/src/components/ContextMenu/MainContextMenu.component";
import React, {createContext, useMemo, useState} from "react";
import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {Box} from "@mui/material";
import LoginForm from "@/builder/src/components/Forms/Modal/LoginForm.component";

interface DataContextInterface {
    dataContext?: Record<string, any>;
    setDataContext?: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    apiConfig: ApiConfigInterface;
    pageId?: string | null
}

const defaultApiConfig: ApiConfigInterface = {
    domain: '',
    mainPageEndpoint: '',
    image: {
        uploadEndpoint: '',
        deleteEndpoint: ''
    }
};

export const DataContext = createContext<DataContextInterface>({
    dataContext : {},
    setDataContext : () => {},
    apiConfig : defaultApiConfig,
    pageId: null
});

interface BuilderProps {
    start ?: boolean;
    data ?: object;
    apiConfig : ApiConfigInterface,
    pageId?: number
}


const Builder:React.FC<BuilderProps> = (props) => {
    const {
        children,
        start = false,
        data,
        apiConfig,
        pageId = null
    } = props

    const [dataContext, setDataContext] = useState(data)
    const dataContextValue = {
        dataContext,
        setDataContext,
        apiConfig,
        pageId
    }

    if(start) {
        useMemo(() => import('./styles/_hoverElements.scss'), []);
        const HoverImageBorderMemo = useMemo(() => dynamic(() => import('./src/components/HoverElement/HoverImageBorder'), {ssr: false}), [])
        const MainContextMenuMemo = useMemo(() => <MainContextMenu />,[])
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
    return <>
        <LoginForm apiConfig={apiConfig} />
        {children}
    </>
}

export default Builder