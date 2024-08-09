import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";

export default async function Login(apiConfig: ApiConfigInterface, username: string, password: string):Promise<boolean> {

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
        const result = await response.json();
        if(result.hasOwnProperty('token')) {
            window.localStorage.setItem('authenticationToken', result.token as string)
        }
        return true

    } catch (error) {
        return false;
    }

    return false;
}