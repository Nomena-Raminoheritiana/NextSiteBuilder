const getId = (HtmlElement: HTMLElement) => {
    if(HtmlElement.id != undefined) return HtmlElement.id;
    const closestElementWithId = HtmlElement.closest('[id]');
    if (closestElementWithId) {
        return closestElementWithId.id;
    }
    return false;
}

export default getId