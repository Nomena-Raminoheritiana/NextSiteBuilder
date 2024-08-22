import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";

export default async function Logout(apiConfig: ApiConfigInterface, token: string):Promise<boolean|string> {
    try {
        const response = await fetch(`${apiConfig?.domain}${apiConfig?.logoutEndpoint}`, {
            method: 'POST',
            contentType: 'application/json',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (!response.ok) {
            return false;
        }
        return true;
    } catch (error) {
        return false;
    }
}