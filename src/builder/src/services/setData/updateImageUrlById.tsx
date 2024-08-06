const updateImageUrlById = (copyObjData, id, newValue) => {
    // Vérifie si l'objet actuel contient la clé "id" et si elle correspond à l'ID recherché
    if (copyObjData && copyObjData.id === id) {
        if (copyObjData.url !== undefined) {
            copyObjData.url = newValue.url;
            copyObjData.title = newValue.title || newValue.alt;
            copyObjData.alt = newValue.alt || newValue.title;
            return true; // Indique que la mise à jour a été effectuée
        }
        if (copyObjData.img !== undefined) {
            copyObjData.img = newValue.url;
            copyObjData.title = newValue.title || newValue.alt;
            copyObjData.alt = newValue.alt || newValue.title;
            return true; // Indique que la mise à jour a été effectuée
        }
    }

    // Parcourt récursivement les objets imbriqués et les tableaux
    for (const key in copyObjData) {
        if (copyObjData[key] && typeof copyObjData[key] === 'object') {
            if (updateImageUrlById(copyObjData[key], id, newValue)) {
                return true; // Arrête la recherche si l'ID a été trouvé et mis à jour
            }
        }
    }

    return false; // Indique que l'ID n'a pas été trouvé dans l'objet
}

export default updateImageUrlById;