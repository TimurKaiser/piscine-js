function filterKeys(obj, predicate) {
    // Filtrer les clés qui passent le test de la fonction predicate
    const filteredKeys = Object.keys(obj).filter(key => predicate(key));
    
    const result = {};
    filteredKeys.forEach(key => {
        result[key] = obj[key];
    });
    
    return result;
}


function mapKeys(obj, callback) {
    const transformedObj = {};
    Object.keys(obj).forEach(key => {
        transformedObj[callback(key)] = obj[key];
    });
    
    return transformedObj;
}

function reduceKeys(obj, callback, initialValue) {
    let value = initialValue || "";
    
    // Appliquer la fonction de réduction à chaque clé
    Object.keys(obj).forEach(key => {
        value += callback(value, key, initialValue) + ", ";
    });
    
    return value.slice(0, -2);
}
