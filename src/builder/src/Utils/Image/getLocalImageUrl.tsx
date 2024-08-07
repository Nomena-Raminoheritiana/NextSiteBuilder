import isImage from "@/builder/src/Utils/Image/isImage";

interface FileResult {
    url: string;
    name: string;
    file: File
}

export default function getLocalImageUrl(input:HTMLInputElement): Promise<FileResult | boolean> {
    return new Promise((resolve, reject) => {
        if (input?.files && input?.files[0]) {
            const file = input?.files[0];
            if (isImage(input?.files[0])) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const res = e.target.result;
                    if (typeof res === "string") {
                        const split1 = res?.split(";")[0];
                        if(split1.includes("image")){
                            resolve({ url: res, name: file.name, file:file });
                        } else {
                            resolve(false);
                        }
                    } else {
                        resolve(false);
                    }
                };
                reader.onerror = function() {
                    reject(new Error("Failed to read file"));
                };
                reader.readAsDataURL(input?.files[0]);
            } else {
                resolve(false);
            }
        } else {
            resolve(false);
        }
    })
}