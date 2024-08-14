export default function getAllElementById(id:string, forEach:((element:HTMLElement, index:number) => void) | null = null ): Array<HTMLElement> | null {
    const elements = document.querySelectorAll(`[id="${id}"]`);
    if (typeof forEach === 'function') {
        elements.forEach((element:HTMLElement, index:number) => {
            forEach(element, index);
        })
    } else if(elements.length > 0) {
        return elements as Array<HTMLElement>
    }
    return null
}