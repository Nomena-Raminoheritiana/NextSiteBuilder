import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";

export default async function deleteImage(apiConfig:ApiConfigInterface, pageId: string|number|null|undefined, idFromFront: string) {
    if(pageId && idFromFront) {
        try {
            const response = await fetch(`${apiConfig?.domain}${apiConfig?.image?.uploadEndpoint}/${idFromFront}/${pageId}`, {
                method: 'DELETE'
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