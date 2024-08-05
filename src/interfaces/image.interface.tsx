import sxProps from "@/interfaces/sx.interface";

export default interface ImageProps extends sxProps{
    className?: string;
    src?: string;
    url: string|object;
    title?: string;
    description?: string;
    alt?: string;
    contentType?: string;
    fileName?: string;
    size?: number;
    width?: number;
    height?: number;
    srcSet?: string;
    onClick?: () => {};
    loading?: string;
    id?: string;
}