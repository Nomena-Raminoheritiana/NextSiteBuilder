import VerifyToken from "@/builder/src/services/apiCall/authentication/VerifyToken";
import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {getTokenFromLS, removeTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";

const ValidateTokenFromLS = async (apiConfig: ApiConfigInterface): Promise<boolean | string> => {
    const tokenFromLS = getTokenFromLS();
    if(tokenFromLS) {
        const isTokenVerified = await VerifyToken(apiConfig, tokenFromLS)
        if(isTokenVerified) {
            return tokenFromLS as string;
        } else {
            removeTokenFromLS();
            return false
        }
    }
    return false;
}

export default ValidateTokenFromLS