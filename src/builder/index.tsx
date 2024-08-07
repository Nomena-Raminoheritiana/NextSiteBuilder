'use client'

import dynamic from "next/dynamic";
import MainContextMenu from "@/builder/src/components/ContextMenu/MainContextMenu.component";
import React, {createContext, SetStateAction, useMemo, useState} from "react";
import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";

interface DataContextInterface {
    dataContext?: Record<string, any>,
    setDataContext?: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    apiConfig?: Record<string, any> | null,
    pageId?: string | null
}

export const DataContext = createContext<DataContextInterface>({
    dataContext : {},
    setDataContext : () => {},
    apiConfig : null,
    pageId: null
});

interface BuilderProps {
    start ?: boolean;
    data ?: object;
    apiConfig?: ApiConfigInterface,
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
                <HoverImageBorderMemo />
                {MainContextMenuMemo}
                {children}
            </DataContext.Provider>
        </>
    }
    return <>
        {children}
    </>
}

export default Builder