const deleteElementById = (copyObjData, id) => {
    // Parcourt récursivement les objets imbriqués et les tableaux
    for (const key in copyObjData) {
        if (copyObjData[key] && typeof copyObjData[key] === 'object') {
            // Vérifie si l'objet actuel contient la clé "id" et si elle correspond à l'ID recherché
            if (copyObjData[key].id === id) {
                delete copyObjData[key]; // Supprime la clé parente
                return true; // Indique que la suppression a été effectuée
            }
            // Appel récursif pour les objets imbriqués
            if (deleteElementById(copyObjData[key], id)) {
                return true; // Arrête la recherche si l'ID a été trouvé et supprimé
            }
        }
    }
    return false; // Indique que l'ID n'a pas été trouvé dans l'objet
};

export default deleteElementById;