export interface ElementInfo {
    top: number,
    right: number,
    bottom: number,
    left: number,
    width: number,
    height: number,
    x: number,
    y: number,
    display: string
}
export default function getElementInfo(element: HTMLElement):ElementInfo|null {
    // Vérifie si l'élément est valide
    if (!element || !(element instanceof HTMLElement)) {
        console.error('L\'élément fourni n\'est pas valide.');
        return null;
    }

    // Utilise getBoundingClientRect pour obtenir les informations
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);
    // Retourne les informations pertinentes
    return {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y,
        display: style.display
    };
}

