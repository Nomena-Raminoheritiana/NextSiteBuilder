import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {getTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";

const saveModelTheme = async (
    modelId: any,
    apiConfig: ApiConfigInterface,
    newTheme
) => {

    const data = {
        "themeColor": newTheme
    }

    const requestOptions = {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getTokenFromLS()}`
        },
        redirect: 'follow' as RequestRedirect,
        body: JSON.stringify(data)
    };

    const pagePropsUrl = `${apiConfig.mainPageEndpoint}/${modelId}`;
    const result = await fetch(apiConfig.domain + pagePropsUrl, requestOptions);
    if (result.status !== 200) {
        console.log('Error when pushing data from '+ apiConfig.domain + pagePropsUrl);
        return false;
    }
    return result.json()
}

export default saveModelTheme;