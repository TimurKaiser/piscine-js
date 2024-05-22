function filter(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (func(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function reject(array, func) {
    return filter(array, (element, index, array) => func(element, index, array));
}

function partition(arr, func) {
    return [filter(arr, func) , reject(arr, func)];
}
