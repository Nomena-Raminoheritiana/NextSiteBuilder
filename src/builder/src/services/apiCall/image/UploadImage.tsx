import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";

export default async function uploadImage(apiConfig: Record<string, any> | null | undefined, file: File, pageId: string | null | undefined, idFromFront: string) {
    if(pageId && file && idFromFront) {
        const pageIRI = apiConfig?.urlGet?.replace('{id}', pageId)
        const formData = new FormData();
        formData.append('file', file);
        formData.append('page', pageIRI || null);
        formData.append('idFromFront', idFromFront);

        try {
            const response = await fetch(`${apiConfig?.domain}${apiConfig?.image?.urlUpload}`, {
                method: 'POST',
                body: formData
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