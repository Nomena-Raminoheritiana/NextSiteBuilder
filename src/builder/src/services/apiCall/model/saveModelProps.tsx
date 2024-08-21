import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";
import {getTokenFromLS} from "@/builder/src/services/authentication/TokenFromLS";

const saveModelProps = async (
    modelId: any,
    apiConfig: ApiConfigInterface,
    newData
) => {

    const data = {
        "props": newData
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

export default saveModelProps;