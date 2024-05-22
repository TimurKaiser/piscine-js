// where is the problemeeeeeeeeeeeeeeee
function forEach(array, functionn) {
    for (let i = 0; i < array.length; i++) {
        functionn(array[i], i, array);
    }
}