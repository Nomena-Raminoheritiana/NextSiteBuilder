import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {getTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";

export default async function uploadImage(apiConfig:ApiConfigInterface, file: File, pageId: string | null | undefined, idFromFront: string) {
    if(pageId && file && idFromFront) {
        const pageIRI = `${apiConfig.mainPageEndpoint}/${pageId}`
        const formData = new FormData();
        formData.append('file', file);
        formData.append('page', pageIRI);
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
            const result = await response.json();
            return result;
        } catch (error) {
            return false;
        }
    }
   return false;
}