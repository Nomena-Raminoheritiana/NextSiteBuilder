import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {getTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";

export default async function VerifyToken(apiConfig: ApiConfigInterface, token: string):Promise<boolean|string> {
    try {
        const response = await fetch(`${apiConfig?.domain}${apiConfig?.tokenVerificationEndpoint}`, {
            method: 'POST',
            contentType: 'application/json',
            headers: {
                'Authorization': `Bearer ${getTokenFromLS()}`
            }
        });
        if (!response.ok) {
            return false;
        }
        const result =  await response.json()
        return "verified" in result ? result.verified : false
    } catch (error) {
        return false;
    }
}