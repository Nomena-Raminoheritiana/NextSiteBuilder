import fetch from 'node-fetch';
import apiConfig from '../../config/apiConfig/api.config.json'


const fetchPageProps = async (pageId, ) => {

    const requestOptions = {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'
    };

    const pagePropsUrl = apiConfig.urlGet.replace('{id}', pageId)
    const result = await fetch(apiConfig.domain + pagePropsUrl, requestOptions);
    if (result.status !== 200) {
        console.log('Error when getting page props from '+ apiConfig.domain + pagePropsUrl);
        return false;
    }
    return result.json()
}

export default fetchPageProps;