function indexOf(array, value, startIndex = 0) {
    for (let i = startIndex; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(array, value) {
    let lastIndex = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            lastIndex = i;
        }
    }
    return lastIndex;
}

function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
}
