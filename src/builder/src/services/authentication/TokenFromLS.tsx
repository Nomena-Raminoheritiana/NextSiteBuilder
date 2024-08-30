import LocalStorageKey from "@/builder/src/data/LocalStorage/LocalStorageKey.json"

export function setTokenFromLS(token: string) {
    try {
        window.localStorage.setItem(getUserTokenKey(), token)
    } catch(e) {
        return null
    }
}

export function getTokenFromLS() {
    try {
        return window.localStorage.getItem(getUserTokenKey())
    } catch(e) {
        return null
    }
}

export function removeTokenFromLS() {
    try{
        window.localStorage.removeItem(getUserTokenKey())
    } catch(e) {
        return null
    }

}

export function getUserTokenKey() {
    return LocalStorageKey.userTokenKey;
}