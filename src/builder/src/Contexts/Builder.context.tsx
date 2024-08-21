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
}

export const BuilderContext = createContext<BuilderContextInterface>({
    pageProps : {},
    setPageProps : () => {},
    apiConfig : DefaultApiConfig,
    modelId: null,
    token: null,
    availableThemes: null,
    themeUsed: null,
    setThemeUsed : () => {}
});

export default BuilderContext;