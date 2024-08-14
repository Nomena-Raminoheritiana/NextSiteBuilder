const getId = (HtmlElement: HTMLElement) : string | false => {
    if(HtmlElement.id != undefined) return HtmlElement.id;
    const closestElementWithId = HtmlElement.closest('[id]');
    if (closestElementWithId) {
        return closestElementWithId.id;
    }
    return false;
}

export default getId