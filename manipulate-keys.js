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
    let undef = false;

    if (initialValue === undefined) {
        initialValue = "";
        undef = true;
    }
    
    let result = Object.keys(obj).reduce((acc, curr) => {
        return callback(acc, curr, initialValue);
    }, initialValue);

    if (typeof result !== "number") {
        if (res.slice(0, 2) === ", ") result = result.slice(2);
        if (undef && result[0] === ":") result = result.slice(1);
    }

    return result;
}
