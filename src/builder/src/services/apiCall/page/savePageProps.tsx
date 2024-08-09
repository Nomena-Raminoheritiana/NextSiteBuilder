import ApiConfigInterface from "@/builder/src/Interfaces/ApiConfig.interface";

const savePageProps = async (
    pageId: string | null | undefined,
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
            'Accept': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
    };

    const pagePropsUrl = `${apiConfig.mainPageEndpoint}/${pageId}`;
    const result = await fetch(apiConfig.domain + pagePropsUrl, requestOptions);
    if (result.status !== 200) {
        console.log('Error when pushing data from '+ apiConfig.domain + pagePropsUrl);
        return false;
    }
    return result.json()
}

export default savePageProps;