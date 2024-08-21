import fetch from 'node-fetch';
import apiConfig from '../../config/apiConfig/api.config.json'

export interface ModelDataInterface {
    props?: object,
    themeColor?: string
}

const fetchPageProps = async (modelId:number): Promise<ModelDataInterface | boolean> => {

    const requestOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow' as RequestRedirect
    };

    const modelPropsUrl = `${apiConfig.mainPageEndpoint}/${modelId}`
    const result = await fetch(apiConfig.domain + modelPropsUrl, requestOptions);
    if (result.status !== 200) {
        console.log('Error when getting page props from '+ apiConfig.domain + modelPropsUrl);
        return false;
    }
    return result.json() as Promise<ModelDataInterface>
}

export default fetchPageProps;