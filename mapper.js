function map(array, functionn) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(functionn(array[i], i, array));
    }
    return result;
}

function flatMap(array, functionn) {
    let result = [];
    for (let i = 0; i <= array.length; i++) {
        let mappedValue = fn(array[i], i, array);
        if (Array.isArray(mappedValue)) {
            result = result.concat(mappedValue);
        } else {
            result.push(mappedValue);
        }
    }
    return result;
}
