import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";

export default async function uploadImage(apiConfig: Record<string, any> | null | undefined, file: File, pageId: string | null | undefined, idFromFront: string) {
    if(pageId && file && idFromFront) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('page', pageId || '');
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
            console.log('Success:', result);
            return result;
        } catch (error) {
            return false;
        }
    }
   return false;
}