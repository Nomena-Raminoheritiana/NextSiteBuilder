export default interface ApiConfigInterface {
    "domain" : string;
    "mainPageEndpoint" : string;
    "image" : {
        "uploadEndpoint": string;
        "deleteEndpoint": string
    },
    "loginEndpoint" : string,
    "tokenVerificationEndpoint" : string,
    "logoutEndpoint" : string
}