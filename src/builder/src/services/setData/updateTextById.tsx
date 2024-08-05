const updateTextById = (copyObjData, id, newText) => {
    // Vérifie si l'objet actuel contient la clé "id" et si elle correspond à l'ID recherché
    if (copyObjData && copyObjData.id === id) {
        if (copyObjData.text !== undefined) {
            copyObjData.text = newText;
            return true; // Indique que la mise à jour a été effectuée
        }
    }

    // Parcourt récursivement les objets imbriqués et les tableaux
    for (const key in copyObjData) {
        if (copyObjData[key] && typeof copyObjData[key] === 'object') {
            if (updateTextById(copyObjData[key], id, newText)) {
                return true; // Arrête la recherche si l'ID a été trouvé et mis à jour
            }
        }
    }

    return false; // Indique que l'ID n'a pas été trouvé dans l'objet
}

export default updateTextById;