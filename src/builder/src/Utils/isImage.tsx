export default function isImage(file?:File) {
    if (file && file.name.match(/\.(jpg|jpeg|png|gif|bmp|ico|avif|PNG)$/) ) {
        return true;
    }
    return false;
}
