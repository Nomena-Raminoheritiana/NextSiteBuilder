import React, {createContext} from "react";
import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import DefaultApiConfig from "@/builder/src/data/DefaultApiConfig.json";
import AvailableThemesInterface from "@/builder/src/Interfaces/AvailableThemes.interface";

export interface BuilderContextInterface {
    pageProps?: Record<string, any> | null;
    setPageProps?: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    apiConfig: ApiConfigInterface;
    modelId?: number | string | null;
    token?: string | null;
    availableThemes ?: AvailableThemesInterface | null;
    themeUsed?: string | null;
    setThemeUsed?: React.Dispatch<React.SetStateAction<string | null>>;
    globalViewState: boolean;
    setGlobalViewState: React.Dispatch<React.SetStateAction<boolean>>;
    globalViewZoom: number;
    setGlobalViewZoom: React.Dispatch<React.SetStateAction<number>>;
}

export const BuilderContext = createContext<BuilderContextInterface>({
    pageProps : {},
    setPageProps : () => {},
    apiConfig : DefaultApiConfig,
    modelId: null,
    token: null,
    availableThemes: null,
    themeUsed: null,
    setThemeUsed : () => {},
    globalViewState: false,
    setGlobalViewState: () => {},
    globalViewZoom: 0.3,
    setGlobalViewZoom: () => {}
});

export default BuilderContext;