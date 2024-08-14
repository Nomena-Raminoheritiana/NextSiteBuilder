const updateHyperlinkById = (copyObjData, id, newValue) => {
    let updated = false; // Indicateur pour vérifier si une mise à jour a été effectuée

    // Vérifie si l'objet actuel contient la clé "id" et si elle correspond à l'ID recherché
    if (copyObjData && copyObjData.id === id) {
        copyObjData.label = newValue?.label || null;
        copyObjData.url = newValue?.url || null;
        copyObjData.openLinkInNewTab = newValue?.openLinkInNewTab || false;
        updated = true; // Indique que la mise à jour a été effectuée
    }

    // Parcourt récursivement les objets imbriqués et les tableaux
    for (const key in copyObjData) {
        if (copyObjData[key] && typeof copyObjData[key] === 'object') {
            const result = updateHyperlinkById(copyObjData[key], id, newValue);
            if (result) {
                updated = true; // Indique que la mise à jour a été effectuée pour cet objet imbriqué
            }
        }
    }

    return updated; // Retourne true si une ou plusieurs mises à jour ont été effectuées
}

export default updateHyperlinkById;
