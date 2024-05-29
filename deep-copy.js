function deepCopy(obj) {
    // Si l'objet est un tableau, crée une copie du tableau en prenant récursivement chaque élément
    if (Array.isArray(obj)) {
        const copyArr = [];
        for (let i = 0; i < obj.length; i++) {
          copyArr[i] = deepCopy(obj[i]);
        }
        return copyArr;
    }
    
    // Si l'objet est un objet, crée une copie de l'objet en copiant récursivement chaque propriété
    const copyObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          copyObj[key] = deepCopy(obj[key]);
        }
    }
     return copyObj;
}