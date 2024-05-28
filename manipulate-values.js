function filterValues(obj, callback) {
    let result =  {}
    for (let key in obj) { // on vas iterer a l'interieur de l'objet avec in
        if(callback(obj[key])) {
            res[key] = obj[key];
        }
    }
    return result;
}

function map() {
    let result = {}
    for (let key in obj) {
        res[key] = callback(obj[key]);
    }
    return result
}

function reduce(obj, callback, acc) {
    for (let key in obj) {
        acc = callback(acc, obj[key]);
    }
    return acc;
}