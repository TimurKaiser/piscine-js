// fait avex phind a revoir

function fusion(obj1, obj2) {
    /* Vérifie si les deux paramètres sont des objets */
    if (typeof obj1!== 'object' || typeof obj2!== 'object') {
        throw new Error('Les deux paramètres doivent être des objets');
    }
    /* Fonction récursive pour fusionner les objets */
    function mergeObjects(objA, objB) {
        for (const key in objB) {
            if (objB.hasOwnProperty(key)) {
                /* Si la clé existe dans objA, fusionne selon le type */
                if (objA.hasOwnProperty(key)) {
                    if (Array.isArray(objA[key]) && Array.isArray(objB[key])) {
                        objA[key] = objA[key].concat(objB[key]); /* Fusionne les tableaux */
                    } else if (typeof objA[key] === 'string' && typeof objB[key] === 'string') {
                        objA[key] = objA[key] + ' ' + objB[key]; /* Concatène les chaînes avec un espace */
                    } else if (typeof objA[key] === 'number' && typeof objB[key] === 'number') {
                        objA[key] = objA[key] + objB[key]; /* Additionne les nombres */
                    } else if (typeof objA[key] === 'object' && typeof objB[key] === 'object') {
                        objA[key] = mergeObjects(objA[key], objB[key]); /* Fusionne récursivement les objets */
                    } else {
                        objA[key] = objB[key]; /* En cas de type mismatch, utilise la valeur de objB */
                    }
                } else {
                    objA[key] = objB[key]; /* Si la clé n'existe pas dans objA, l'ajoute */
                }
            }
        }
        return objA;
    }
    /* Crée un nouvel objet en fusionnant les deux objets d'origine */
    const result = mergeObjects({...obj1 }, obj2);
    return result;
}
