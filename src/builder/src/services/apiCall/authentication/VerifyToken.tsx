import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";

export default async function VerifyToken(apiConfig: ApiConfigInterface, token: string):Promise<boolean|string> {
    try {
        const response = await fetch(`${apiConfig?.domain}${apiConfig?.tokenVerificationEndpoint}`, {
            method: 'POST',
            contentType: 'application/json',
            body: JSON.stringify({
                token: token
            })
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