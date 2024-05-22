function map(array, functionn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(functionn(array[i], i, array));
    }
    return result;
}

function flatMap(array, functionn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let mapp = functionn(array[i], i, array);
        if (Array.isArray(mapp)) {
            result = result.concat(mapp);
        } else {
            result.push(mapp);
        }
    }
    return result;
}