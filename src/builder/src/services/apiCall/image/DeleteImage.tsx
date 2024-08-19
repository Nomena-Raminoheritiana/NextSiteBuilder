import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {getTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";

export default async function deleteImage(apiConfig:ApiConfigInterface, modelId: string|number|null|undefined, idFromFront: string) {
    if(modelId && idFromFront) {
        try {
            const response = await fetch(`${apiConfig?.domain}${apiConfig?.image?.uploadEndpoint}/${idFromFront}/${modelId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${getTokenFromLS()}`
                }
            });
            if (!response.ok) {
                return false;
            }
           await response.json();
        } catch (error) {
            return false;
        }
    }
}