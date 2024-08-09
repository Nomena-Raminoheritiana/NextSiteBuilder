import LocalStorageKey from "@/builder/src/data/LocalStorage/LocalStorageKey.json"

export function setTokenFromLS(token: string) {
    window.localStorage.setItem(getUserTokenKey(), token)
}

export function getTokenFromLS() {
    return window.localStorage.getItem(getUserTokenKey())
}

export function removeTokenFromLS() {
    window.localStorage.removeItem(getUserTokenKey())
}

export function getUserTokenKey() {
    return LocalStorageKey.userTokenKey;
}