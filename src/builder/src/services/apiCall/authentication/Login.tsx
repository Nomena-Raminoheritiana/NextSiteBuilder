import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";

export default async function Login(apiConfig: ApiConfigInterface, username: string, password: string):Promise<boolean|string> {
    try {
        const response = await fetch(`${apiConfig?.domain}${apiConfig?.loginEndpoint}`, {
            method: 'POST',
            contentType: 'application/json',
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        if (!response.ok) {
            return false;
        }
        const result =  await response.json()
        return  "token" in result ? result.token : false;
    } catch (error) {
        return false;
    }
}