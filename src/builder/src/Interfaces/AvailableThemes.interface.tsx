export interface Theme {
    name: string;
    imagePreview: string;
}

export default interface AvailableThemesInterface {
    siteModelName: string;
    themes: Theme[];
}