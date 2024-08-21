import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {getTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";

export default async function uploadImage(apiConfig:ApiConfigInterface, file: File, modelId: string | null | undefined, idFromFront: string) {
    if(modelId && file && idFromFront) {
        const pageIRI = `${apiConfig.mainPageEndpoint}/${modelId}`
        const formData = new FormData();
        formData.append('file', file);
        formData.append('model', pageIRI);
        formData.append('idFromFront', idFromFront);

        try {
            const response = await fetch(`${apiConfig?.domain}${apiConfig?.image?.uploadEndpoint}`, {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${getTokenFromLS()}`
                }
            });
            if (!response.ok) {
                return false;
            }
            return await response.json();
        } catch (error) {
            return false;
        }
    }
   return false;
}