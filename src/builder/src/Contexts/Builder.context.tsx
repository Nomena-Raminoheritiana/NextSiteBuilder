import React, {createContext} from "react";
import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import DefaultApiConfig from "@/builder/src/data/DefaultApiConfig.json";

export interface BuilderContextInterface {
    dataContext?: Record<string, any>;
    setDataContext?: React.Dispatch<React.SetStateAction<Record<string, any>>>;
    apiConfig: ApiConfigInterface;
    pageId?: string | null;
    token?: string | null;
}

export const BuilderContext = createContext<BuilderContextInterface>({
    dataContext : {},
    setDataContext : () => {},
    apiConfig : DefaultApiConfig,
    pageId: null,
    token: null
});

export default BuilderContext;